import React, { useState, useEffect } from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
  const [gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchGifs = () => {
    const apiKey = "J1xwLG3LYPohvTlQV1gxssS3eVOCnEZ3";
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=${apiKey}&rating=g`;

    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setGifs(data.data.slice(0, 3)); // Storing the first 3 gifs in component state
      })
      .catch((error) => {
        console.error("Error fetching gifs:", error);
      });
  };

  useEffect(() => {
    // Define the function inside the useEffect to make it part of the component scope
    const fetchGifs = () => {
      // The rest of the fetchGifs function remains the same
    };

    fetchGifs();
  }, [searchTerm]); // Include only searchTerm in the dependency array

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchGifs();
  };

  return (
    <div>
      <GifSearch handleSubmit={handleSubmit} setSearchTerm={setSearchTerm} />
      <GifList gifs={gifs} />
    </div>
  );
}

export default GifListContainer;
