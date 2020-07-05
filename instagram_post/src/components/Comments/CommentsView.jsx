import React from "react";
import Comment from "./Comment";
import { mockData } from "../../mockData/mock";
import AddComment from "./AddComment";
import PostMetadata from "../PostMetadata";
import store from "../../store";
import { connect } from "react-redux";
import { addComment } from "../../actions/index";

class CommentsView extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
    this.getMock = this.getMock.bind(this);
    this.addComment = this.addComment.bind(this);
  }

  componentDidMount() {
    this.getMock();
  }
  getMock() {
    this.setState({
      data: mockData,
    });
  }
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
    this.setState({
      data: temp,
    });
  }

  render() {
    return (
      <div style={styles.container}>
        {Object.values(this.state.data).map((comment) => (
          <Comment
            timePosted={comment.timePosted}
            username={comment.username}
            userComment={comment.userComment}
            avatar={comment.avatar}
            commentLikes={comment.commentLikes}
            width={this.props.width}
          />
        ))}
        <div style={styles.solidLine} />

        <PostMetadata commentLikes={55} />

        <div style={styles.solidLine} />
        <AddComment addComment={this.addComment} />
      </div>
    );
  }
}
export default connect()(CommentsView);
store.subscribe(() => {
  console.log("Store updated!", store.getState());
});
store.dispatch({
  type: "ADD_COMMENT",
  userComment: "YOYOYOYOYOYOYOOYOYOYOYO",
  username: "kgobakis",
});
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  solidLine: {
    borderTop: "1.4px solid #bbb",
  },
};
