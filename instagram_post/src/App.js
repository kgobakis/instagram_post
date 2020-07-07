import React from "react";
import Post from "./components/Post";

// localStorage.getItem("comments", JSON.stringify(mockData));

localStorage.setItem("id", 3);
function App(props) {
  return <Post />;
}

export default App;
