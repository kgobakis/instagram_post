import React from "react";
import { Slideshow } from "./Slideshow/Slideshow";
import UserInfo from "../components/Comments/UserInfo";
import PostMetadata from "./PostMetadata";
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
    // console.log(this.state.height, this.state.width);

    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  }
  render() {
    return (
      <div style={styles.root}>
        <Paper elevation={3}>
          <div style={styles.containerInside}>
            <div
              style={{
                height: this.state.height - 50,
                width: this.state.width / 1.4,
              }}
            >
              <Slideshow height={this.state.height} width={this.state.width} />
            </div>
            <div
              style={{
                width: this.state.width / 1.4,
                marginLeft: -8,
              }}
            >
              <div style={styles.solidLine} />

              <UserInfo />
              <div style={styles.solidLine} />

              <CommentsView />
              <PostMetadata />
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}
export default Post;

const styles = {
  root: {
    padding: 15,
  },
  containerInside: {
    display: "flex",
    flexDirection: "row",
  },
  solidLine: {
    borderTop: "1.4px solid #bbb",
  },
};
