import React from "react";
import Post from "./components/Post";
import { mockData } from "./mockData/mock";

//If there are no comments then add mock;
localStorage.getItem("comments") ||
  localStorage.setItem("comments", JSON.stringify(mockData));
localStorage.getItem("id") || localStorage.setItem("id", 10);
localStorage.getItem("locallyLikedIds") ||
  localStorage.setItem("locallyLikedIds", JSON.stringify([]));
localStorage.getItem("saveForLater") ||
  localStorage.setItem("saveForLater", false);
// localStorage.clear();

function App(props) {
  return <Post />;
}

export default App;
