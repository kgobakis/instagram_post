import React from "react";
import Post from "./components/Post";
import { mockData } from "./mockData/mock";

//If there are no comments then add mock; if the id value for the comments was not instantiated then do so.
localStorage.getItem("comments") ||
  localStorage.setItem("comments", JSON.stringify(mockData));
localStorage.getItem("id") || localStorage.setItem("id", 10);
localStorage.getItem("locallyLikedIds") ||
  localStorage.setItem("locallyLikedIds", JSON.stringify([]));
// localStorage.clear();
function App(props) {
  return <Post />;
}

export default App;
