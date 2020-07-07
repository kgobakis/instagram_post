import React from "react";
import Post from "./components/Post";
import { mockData } from "./mockData/mock";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

//If there are no comments then add mock;
localStorage.getItem("comments") ||
  localStorage.setItem("comments", JSON.stringify(mockData));
localStorage.getItem("id") || localStorage.setItem("id", 10);
localStorage.getItem("locallyLikedIds") ||
  localStorage.setItem("locallyLikedIds", JSON.stringify([]));
// localStorage.getItem("saveForLater") ||
//   localStorage.setItem("saveForLater", false);
// localStorage.clear();

function App(props) {
  const [value, setValue] = React.useState(2);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    console.log(value);
  };
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
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
