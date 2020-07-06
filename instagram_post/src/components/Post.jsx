import React from "react";
import { Slideshow } from "./Slideshow/Slideshow";
import UserInfo from "../components/Comments/UserInfo";
import { mockData } from "../mockData/mock";
import { connect } from "react-redux";
import store from "../store";
import Paper from "@material-ui/core/Paper";
import CommentsView from "./Comments/CommentsView";

class Post extends React.Component {
  constructor() {
    super();
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
  }
  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }
  updateDimensions() {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }
  render() {
    return (
      <div style={styles.root}>
        <Paper elevation={4}>
          <div style={styles.containerInside}>
            <div
              style={{
                height: this.state.height - 50,
                width: this.state.width / 1.42,
              }}
            >
              <Slideshow height={this.state.height} width={this.state.width} />
            </div>
            <div
              style={{
                width: this.state.width / 1.42,
                marginLeft: -8,
              }}
            >
              <div style={styles.containerVertical}>
                <div style={styles.solidLine} />

                <UserInfo />
                <div style={styles.solidLine} />

                <CommentsView
                  children={store.getState()}
                  width={this.state.width}
                  updatePostState={this.updateDimensions}
                />
              </div>
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}
export default connect()(Post);

// store.dispatch({
//   type: "ADD_COMMENT",
//   userComment: "YOYOYOYOYOYOYOOYOYOYOYO",
//   username: "kgobakis",
//   avatar: require("../media/avatar.jpg"),
//   timePosted: "1m",
//   commentLikes: 2,
// });

const styles = {
  root: {
    padding: 15,
  },
  containerInside: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  solidLine: {
    borderTop: "1px solid #CDCDCD",
  },
  containerVertical: {
    display: "flex",
    flexDirection: "column",
  },
};
