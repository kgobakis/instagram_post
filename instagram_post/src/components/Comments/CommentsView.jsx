import React, { PropTypes } from "react";
import Comment from "./Comment";
import AddComment from "./AddComment";
import PostMetadata from "../PostMetadata";

import { connect } from "react-redux";

class CommentsView extends React.Component {
  constructor() {
    super();
    this.state = {
      commentUsername: "",
      commentId: "",
    };
    this.addComment = this.addComment.bind(this);
    // this.addReply = this.addReply.bind(this);
    this.toggleReply = this.toggleReply.bind(this);
    this.makeReply = this.makeReply.bind(this);
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
      children: [],
    });
    localStorage.setItem("id", id + 1);
    localStorage.setItem("comments", JSON.stringify(comments));

    this.props.updatePostState();
  }
  toggleReply(username, id) {
    this.setState({
      commentUsername: username,
      commentId: id,
    });
  }

  makeReply(commentUsername, parentId, text) {
    let comments = JSON.parse(localStorage.getItem("comments"));
    let id = parseInt(localStorage.getItem("id"));

    let index;
    let comment;
    for (var i = 0; i < comments.length; i++) {
      if (comments[i].id === parentId) {
        index = i;
        comment = comments[i];
      }
    }

    let replyToAdd = {
      id: id,
      parentId: parentId,
      timePosted: "1m",
      username: "kgobakis",
      userComment: text,
      avatar: "./media/avatar.jpg",
      commentLikes: 100,
      userLink: commentUsername,
    };
    comment.children.push(replyToAdd);

    comments[index] = comment;
    localStorage.setItem("id", id + 1);

    localStorage.setItem("comments", JSON.stringify(comments));
    this.props.updatePostState();
  }
  render() {
    const { children, width } = this.props;
    let locallyLikedIds = JSON.parse(localStorage.getItem("locallyLikedIds"));

    return (
      <div style={styles.container}>
        {children &&
          Object.values(children).map((comment, i) => (
            <div key={i}>
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
                Object.values(comment.children).map((reply, i) => (
                  <div key={i} style={{ paddingLeft: 50 }}>
                    <Comment
                      userLink={reply.userLink}
                      toggleReply={this.toggleReply}
                      timePosted={reply.timePosted}
                      username={reply.username}
                      userComment={reply.userComment}
                      avatar={reply.avatar}
                      commentLikes={reply.commentLikes}
                      width={width}
                      children={reply.children}
                      id={reply.id}
                      parentId={comment.id}
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
          }}
        >
          <div
            style={{
              borderTop: "1px solid #CDCDCD",
            }}
          />
          <PostMetadata commentLikes={55} />
          <div
            style={{
              borderTop: "1px solid #CDCDCD",
            }}
          />{" "}
          <AddComment
            addComment={this.addComment}
            usernameReply={
              this.state.commentUsername ? "@" + this.state.commentUsername : ""
            }
            emptyReply={() => {
              this.setState({ commentUsername: "" });
            }}
            makeReply={this.makeReply}
            id={this.state.commentId}
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
