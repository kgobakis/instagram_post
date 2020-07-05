import React from "react";
import Avatar from "react-avatar";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import { BsChat, BsBookmark } from "react-icons/bs";
import TextField from "@material-ui/core/TextField";

export default class PostMetadata extends React.Component {
  state = {
    like: false,
    commentLikes: this.props.commentLikes,
    timePosted: this.props.timePosted,
  };

  render() {
    return (
      <div style={styles.container}>
        <TextField id="standard-disabled" placeholder="Add a comment..." />
        <span
          onClick={() => {
            alert("POSTED");
          }}
        >
          <text color="#F0F6FD">POST</text>
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
