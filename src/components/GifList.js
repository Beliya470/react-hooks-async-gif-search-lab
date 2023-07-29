import React from "react";

function GifList({ gifs }) {
  return (
    <ul>
      {gifs.map((gif) => (
        <li key={gif.id} className="gif-item">
          <img src={gif.images.original.url} alt={gif.title} className="gif-image" />
        </li>
      ))}
    </ul>
  );
}

export default GifList;
