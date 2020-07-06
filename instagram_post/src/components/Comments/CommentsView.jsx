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
    store.dispatch({
      type: "ADD_COMMENT",
      timePosted: "1m",
      username: "kgobakis",
      userComment: text,
      avatar: require("../../media/avatar.jpg"),
      commentLikes: 1,
    });

    this.props.updatePostState();
  }

  render() {
    const { children, width } = this.props;

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
              width={width}
              id={comment.id}
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
                    width={width}
                    children={reply.children}
                    id={reply.id}
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
          <AddComment addComment={this.addComment} />
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
