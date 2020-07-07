import React from "react";
import { Slideshow } from "./Slideshow/Slideshow";
import UserInfo from "../components/Comments/UserInfo";

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
  clearStorage = () => {
    localStorage.clear();
  };
  render() {
    return (
      <div
        style={{
          paddingLeft: 15,
          paddingRight: 15,
        }}
      >
        <Paper square elevation={4}>
          <div
            style={{
              display: "flex",
              flexDirection: this.props.value !== 1 ? "row" : "column",
              justifyContent: "flex-start",
            }}
          >
            <div
              style={{
                width: this.props.value !== 1 ? "calc(70% + 20px)" : "100%",
              }}
            >
              <Slideshow height={this.state.height} />
            </div>
            <div
              style={{
                transform: this.props.value === 1 ? "translate(0px,0px)" : "",
                marginLeft: this.props.value !== 1 ? "-10px" : "",
              }}
            >
              <div style={styles.containerVertical}>
                <div style={styles.solidLine} />

                <UserInfo />
                <div style={styles.solidLine} />

                <CommentsView
                  children={this.state.data}
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
  containerInside: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: -9,
  },
  solidLine: {
    borderTop: "1px solid #CDCDCD",
  },
  containerVertical: {
    display: "flex",
    flexDirection: "column",
  },
};
