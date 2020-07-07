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
      <div
        style={{
          padding: 15,
        }}
      >
        <Paper square elevation={4}>
          <div
            style={{
              display: "flex",
              flexDirection: this.props.value !== "Portrait" ? "row" : "column",
              justifyContent: "flex-start",
              marginLeft: -9,
            }}
          >
            <div
              style={{
                width:
                  this.props.value !== "Portrait" ? "calc(70% + 20px)" : "100%",
              }}
            >
              <Slideshow height={this.state.height} />
            </div>
            <div
              style={{
                width: "calc(30% - 10px)",
                transform:
                  this.props.value !== "Portrait" ? "" : "translate(10px,0px)",
                marginLeft: this.props.value !== "Portrait" ? "-10px" : "",
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
