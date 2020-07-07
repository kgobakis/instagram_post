import React from "react";

import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { BsChat, BsBookmark, BsBookmarkFill } from "react-icons/bs";

export default class PostMetadata extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      commentLikes: 0,
      timePosted: "",
    };

    this.addLike = this.addLike.bind(this);
    this.removeLike = this.removeLike.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount() {
    this.setState({
      like: false,
      commentLikes: this.props.commentLikes,
      timePosted: this.props.timePosted,
    });
  }
  handleLike() {
    if (this.state.like) {
      this.removeLike();
    } else {
      this.addLike();
    }
  }
  addLike = () => {
    this.setState({
      commentLikes: this.state.commentLikes + 1,
      like: !this.state.like,
    });
  };
  removeLike = () => {
    this.setState({
      commentLikes: this.state.commentLikes - 1,
      like: !this.state.like,
    });
  };

  render() {
    return (
      <div style={styles.container}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 5,
            }}
          >
            <span onClick={() => this.handleLike()}>
              {this.state.like ? (
                <AiFillHeart style={{ fontSize: 34, color: "#ED4956" }} />
              ) : (
                <AiOutlineHeart style={{ fontSize: 34, color: "#000" }} />
              )}
            </span>
            <span>
              <BsChat style={{ marginLeft: 25, fontSize: 28, color: "#000" }} />
            </span>
            <span>
              <FiShare
                style={{
                  marginLeft: 25,
                  marginTop: 2,
                  fontSize: 27,
                  color: "#000",
                }}
              />
            </span>
          </div>

          <div>
            <strong
              style={{ color: "#000", fontSize: 17, alignSelf: "center" }}
            >
              {`${this.state.commentLikes}`}{" "}
              {this.state.commentLikes > 1 ? "likes" : "like"}
            </strong>
          </div>
          <div style={{ marginTop: 5 }}>
            {" "}
            <strong
              style={{
                color: "#999999",
                fontSize: 13,
                alignSelf: "center",
              }}
            >{`14 HOURS AGO`}</strong>
          </div>
        </div>
        <span
          onClick={() => this.setState({ postShared: !this.state.postShared })}
        >
          {this.state.postShared ? (
            <BsBookmarkFill style={{ fontSize: 28, color: "#000" }} />
          ) : (
            <BsBookmark style={{ fontSize: 28, color: "#000" }} />
          )}
        </span>
      </div>
    );
  }
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",

    margin: 15,
  },
};
