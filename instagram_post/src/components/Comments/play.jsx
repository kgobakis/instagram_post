import React from "react";
import Avatar from "react-avatar";
import { BsThreeDots } from "react-icons/bs";
import { Typography } from "@material-ui/core";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

class Comment extends React.Component {
  state = {
    like: false,
    commentLikes: this.props.commentLikes,
    timePosted: this.props.timePosted,
  };

  render() {
    return (
      <div style={styles.container}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <Avatar
            src="https://randomuser.me/api/portraits/women/71.jpg"
            size="42"
            round={true}
            textSizeRatio={1.75}
          />
          <div style={{ paddingLeft: 15 }}>
            <strong style={{ fontSize: 15 }}>
              {`${this.props.username} `}
            </strong>
            <text style={{ fontSize: 15 }}> {`${this.props.userComment}`}</text>
          </div>
        </div>

        <div style={{ display: "flex" }}>
          <span
            style={{ alignSelf: "center" }}
            onClick={() => this.setState({ like: !this.state.like })}
          >
            {this.state.like ? (
              <AiFillHeart style={{ fontSize: 18, color: "#FF0000" }} />
            ) : (
              <AiOutlineHeart style={{ fontSize: 18, color: "#858585" }} />
            )}
          </span>
        </div>
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
