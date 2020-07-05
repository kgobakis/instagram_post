import React from "react";
import Avatar from "react-avatar";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default class PostMetadata extends React.Component {
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
            src={this.props.avatar}
            size="42"
            round={true}
            textSizeRatio={1.75}
          />
          <div
            style={{
              paddingLeft: 15,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <div>
              <strong style={{ fontSize: 15 }}>
                {`${this.props.username} `}
              </strong>
              <text style={{ fontSize: 15 }}> </text>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "150px",
                marginTop: 5,
              }}
            >
              <strong
                style={{ color: "#999999", fontSize: 15, alignSelf: "center" }}
              >{`${this.props.timePosted}`}</strong>
              <strong
                style={{ color: "#999999", fontSize: 13, alignSelf: "center" }}
              >
                {`${this.props.commentLikes}`}{" "}
                {this.props.commentLikes > 1 ? "likes" : "like"}
              </strong>
              <span>
                <strong
                  style={{
                    color: "#999999",
                    fontSize: 13,
                    alignSelf: "center",
                  }}
                >{`Reply`}</strong>
              </span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", paddingBottom: 15 }}>
          <span
            style={{ alignSelf: "center" }}
            onClick={() => this.setState({ like: !this.state.like })}
          >
            {this.state.like ? (
              <AiFillHeart style={{ fontSize: 19, color: "#ED4956" }} />
            ) : (
              <AiOutlineHeart style={{ fontSize: 19, color: "#9F9F9F" }} />
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
