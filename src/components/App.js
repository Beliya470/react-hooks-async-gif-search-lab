import React from "react";
import NavBar from "./NavBar";
import GifListContainer from "./GifListContainer";
import "./App.css"; // Import the App.css file

function App() {
  return (
    <div>
      <NavBar color="black" title="Giphy Search" />
      <GifListContainer />
    </div>
  );
}

export default App;
