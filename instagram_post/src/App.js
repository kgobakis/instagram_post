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
  /**
   * Note: It may seem small, but I think you should spend some time and come up w/ a specific variable name. Naming variables, functions, etc. is one of the hardest things in software development. It's probably the 2nd biggest factor in how readable your code is. So go with something mode specific than "value" and "handleChange" - going long is totally fine!
   */
  const [value, setValue] = React.useState(2);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    /**
     * Note: We takled about this before, but you never want to use inline styling. You should import CSS files into React components - check out how to do so here: https://programmingwithmosh.com/javascript/importing-css-files-in-react/#:~:text=Importing%20a%20CSS%20file&text=css%20file%20in%20our%20application,components%20in%20the%20same%20file.
     */
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
