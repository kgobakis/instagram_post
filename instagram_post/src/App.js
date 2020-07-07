import React from "react";
import Post from "./components/Post";
import { mockData } from "./mockData/mock";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

// localStorage.clear();

localStorage.getItem("comments") ||
  localStorage.setItem("comments", JSON.stringify(mockData));
localStorage.getItem("id") || localStorage.setItem("id", 10);
localStorage.getItem("locallyLikedIds") ||
  localStorage.setItem("locallyLikedIds", JSON.stringify([]));

function App(props) {
  const [value, setValue] = React.useState(2);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        style={{ alignSelf: "center" }}
      >
        <Tab label="Portrait" />
        <Tab label="Landscape" />
      </Tabs>{" "}
      <Post value={value} />
    </div>
  );
}

export default App;
