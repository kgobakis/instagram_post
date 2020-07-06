import React, { PropTypes } from "react";
import Comment from "./Comment";
import AddComment from "./AddComment";
import PostMetadata from "../PostMetadata";
import store from "../../store";
import { connect } from "react-redux";
import { addComment } from "../../actions/index";

class CommentsView extends React.Component {
  constructor() {
    super();
    this.state = {
      showReplies: false,
    };
    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {}

  addComment(text) {
    let temp = Object.assign(this.state.data);
    store.dispatch({ type: "ADD_COMMENT" });
    temp.push({
      timePosted: "1m",
      username: "kgobakis",
      userComment: text,
      avatar: require("../../media/avatar.jpg"),
      commentLikes: 1,
    });
  }

  render() {
    const { children } = this.props;

    return (
      <div style={styles.container}>
        {Object.values(children.comments).map((comment) => (
          <div key={comment.id}>
            <Comment
              timePosted={comment.timePosted}
              username={comment.username}
              userComment={comment.userComment}
              avatar={comment.avatar}
              commentLikes={comment.commentLikes}
              width={this.props.width}
            />
            {comment.children &&
              Object.values(comment.children).map((reply) => (
                <div key={reply.id} style={{ paddingLeft: 50 }}>
                  <Comment
                    timePosted={reply.timePosted}
                    username={reply.username}
                    userComment={reply.userComment}
                    avatar={reply.avatar}
                    commentLikes={reply.commentLikes}
                    width={this.props.width}
                    children={reply.children}
                  />
                </div>
              ))}{" "}
          </div>
        ))}

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div style={styles.solidLine} />

          <PostMetadata commentLikes={55} />

          <div style={styles.solidLine} />
          <AddComment store={this.props.store} addComment={this.addComment} />
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
    borderTop: "1.4px solid #bbb",
  },
};
