import React from "react";
import TextField from "@material-ui/core/TextField";

export default class AddComment extends React.Component {
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
            this.props.addComment();
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
