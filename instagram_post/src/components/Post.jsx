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
    let data = JSON.parse(localStorage.getItem("comments"));

    super();
    this.state = {
      height: window.innerHeight,
      width: window.innerWidth,
      data: data,
    };
    this.updateDimensions = this.updateDimensions.bind(this);
    this.updatePost = this.updatePost.bind(this);
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
  updatePost() {
    let data = JSON.parse(localStorage.getItem("comments"));

    this.setState({
      data: data,
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
                  children={this.state.data}
                  width={this.state.width}
                  updatePostState={this.updatePost}
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
