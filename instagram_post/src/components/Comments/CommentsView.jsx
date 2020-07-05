import React from "react";
import Comment from "./Comment";
import { data } from "../../mockData/mock";
const CommentsView = () => {
  return (
    <div style={styles.container}>
      {Object.values(data).map((data) => (
        <Comment
          timePosted={data.timePosted}
          username={data.username}
          userComment={data.userComment}
          avatar={data.avatar}
          commentLikes={data.commentLikes}
        />
      ))}

      <div style={styles.solidLine} />
    </div>
  );
};

export default CommentsView;

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  solidLine: {
    borderTop: "1.4px solid #bbb",
  },
};
