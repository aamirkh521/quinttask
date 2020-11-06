import React from "react";
import { getFormattedDate } from "../utils";

function Story({ story, color }) {
  const { headline, slug, publishedAt } = story;
  const src = `https://images.thequint.com/${story["hero-image-s3-key"]}`;
  const author = story["author-name"];

  return (
    <div className="story-container" style={{ backgroundColor: color.bg, color: color.fg }}>
      <div className="story">
        <small className="published-at">{getFormattedDate(publishedAt)}</small>
        <h1 className="headline">{headline}</h1>
        <small className="author">
          Written by <strong>{author}</strong>
        </small>
          <img className="story-image" src={src} alt={slug} />
        <div className="description">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae exercitationem, ab excepturi officia earum,
          asperiores necessitatibus eaque delectus odit tempora adipisci dolore neque recusandae. Explicabo repellendus
          dolorem delectus distinctio maiores.
        </div>
      </div>
    </div>
  );
}

export default Story;
