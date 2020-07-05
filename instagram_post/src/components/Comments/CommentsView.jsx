import React from "react";
import Comment from "./Comment";
import { mockData } from "../../mockData/mock";
import AddComment from "./AddComment";
import PostMetadata from "../PostMetadata";

export default class CommentsView extends React.Component {
  constructor() {
    super();
    this.state = {
      data: {},
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
  addComment() {
    let temp = Object.assign(this.state.data);
    console.log(temp);
  }

  render() {
    return (
      <div style={styles.container}>
        {Object.values(this.state.data).map((data) => (
          <Comment
            timePosted={data.timePosted}
            username={data.username}
            userComment={data.userComment}
            avatar={data.avatar}
            commentLikes={data.commentLikes}
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

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  solidLine: {
    borderTop: "1.4px solid #bbb",
  },
};
