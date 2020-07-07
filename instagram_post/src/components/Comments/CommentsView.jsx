import React, { PropTypes } from "react";
import Comment from "./Comment";
import AddComment from "./AddComment";
import PostMetadata from "../PostMetadata";

import { connect } from "react-redux";

class CommentsView extends React.Component {
  constructor() {
    super();
    this.state = {
      usernameReply: "",
    };
    this.addComment = this.addComment.bind(this);
    this.addReply = this.addReply.bind(this);
    this.toggleReply = this.toggleReply.bind(this);
  }

  componentDidMount() {}

  addComment(text) {
    let comments = JSON.parse(localStorage.getItem("comments"));
    let id = parseInt(localStorage.getItem("id"));
    comments.push({
      id: id,
      userComment: text,
      username: "kgobakis",
      avatar: "./media/avatar.jpg",
      timePosted: "1m",
      commentLikes: 2,
    });
    localStorage.setItem("id", id + 1);
    localStorage.setItem("comments", JSON.stringify(comments));

    this.props.updatePostState();
  }
  toggleReply(username) {
    this.setState({
      usernameReply: username,
    });
  }
  addReply(text) {
    let comments = JSON.parse(localStorage.getItem("comments"));
    let id = parseInt(localStorage.getItem("id"));
    comments.push({
      id: id,
      userComment: text,
      username: "kgobakis",
      avatar: "./media/avatar.jpg",
      timePosted: "1m",
      commentLikes: 2,
    });
    localStorage.setItem("comments", JSON.stringify(comments));

    this.props.updatePostState();
  }
  initiateReply() {}
  render() {
    const { children, width } = this.props;
    let locallyLikedIds = JSON.parse(localStorage.getItem("locallyLikedIds"));

    return (
      <div style={styles.container}>
        {children &&
          Object.values(children).map((comment) => (
            <div key={comment.id}>
              <Comment
                toggleReply={this.toggleReply}
                timePosted={comment.timePosted}
                username={comment.username}
                userComment={comment.userComment}
                avatar={comment.avatar}
                commentLikes={comment.commentLikes}
                width={width}
                id={comment.id}
                like={
                  locallyLikedIds.includes(comment.id.toString()) ? true : false
                }
              />
              {comment.children &&
                Object.values(comment.children).map((reply) => (
                  <div key={reply.id} style={{ paddingLeft: 50 }}>
                    <Comment
                      toggleReply={this.toggleReply}
                      timePosted={reply.timePosted}
                      username={reply.username}
                      userComment={reply.userComment}
                      avatar={reply.avatar}
                      commentLikes={reply.commentLikes}
                      width={width}
                      children={reply.children}
                      id={reply.id}
                      like={
                        locallyLikedIds.includes(reply.id.toString())
                          ? true
                          : false
                      }
                    />
                  </div>
                ))}
            </div>
          ))}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              borderTop: "1px solid #CDCDCD",
              width: width / 3.7 + 8,
            }}
          />
          <PostMetadata commentLikes={55} />
          <div
            style={{
              borderTop: "1px solid #CDCDCD",
              width: width / 3.7 + 8,
            }}
          />{" "}
          <AddComment
            addComment={this.addComment}
            usernameReply={
              this.state.usernameReply ? "@" + this.state.usernameReply : ""
            }
            emptyReply={() => {
              this.setState({ usernameReply: "" });
            }}
          />
        </div>
      </div>
    );
  }
}
export default connect()(CommentsView);

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  solidLine: {
    borderTop: "1.4px solid #CDCDCD",
  },
};
