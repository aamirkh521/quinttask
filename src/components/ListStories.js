import React from "react";
import Story from "./Story";
import { colors } from "../utils";

const colorLength = colors.length;

function ListStories({ stories }) {
  return (
    <>
      {stories.map((story, index) => {
        const date = new Date(story["published-at"]);
        // const month = date.getMonth();
        story.publishedAt = date;

        return <Story story={story} key={index} color={colors[index % colorLength]} />;
      })}
    </>
  );
}

export default ListStories;
