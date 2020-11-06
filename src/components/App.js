import { useEffect, useState } from "react";
import { getChunks } from "../utils";
import data from "../data.json";
import ListStories from "./ListStories";
import Footer from "./Footer";

const storiesData = data.stories;

function App() {
  const [stories, setStories] = useState([]);
  let start = 0;
  let hit = false;
  const limit = 5;

  const scrollHandler = () => {
    if (window.innerHeight + window.scrollY + 50 >= document.body.clientHeight && !hit) {
      hit = true;

      const moreStories = getChunks(storiesData, start);

      if (moreStories.length > 0) {
        setStories((currentStories) => {
          start += limit;
          const s = [...currentStories, ...moreStories];
          hit = false;
          return s;
        });
      }
    }
  };

  useEffect(() => {
    const newStories = getChunks(storiesData, start, limit);
    setStories([...stories, ...newStories]);
    start += limit;

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <div className="container">
      <ListStories stories={stories} />
      {stories.length > 0 && <Footer />}
    </div>
  );
}

export default App;
