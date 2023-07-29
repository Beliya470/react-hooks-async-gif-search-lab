import React, { useState } from "react";

function GifSearch({ handleSubmit, setSearchTerm }) {
  const [searchValue, setSearchValue] = useState("");

  const handleChange = (event) => {
    setSearchValue(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(searchValue);
    handleSubmit();
  };

  return (
    <form onSubmit={handleFormSubmit} style={{ textAlign: "center" }}>
      <input
        type="text"
        value={searchValue}
        onChange={handleChange}
        placeholder="Search for Gifs..."
        style={{
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          width: "300px", // You can adjust the width as needed
        }}
      />
      <button
        type="submit"
        style={{
          marginLeft: "10px", // Add some space between the input and button
          padding: "8px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          backgroundColor: "#007bff",
          color: "#fff",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </form>
  );
}

export default GifSearch;
