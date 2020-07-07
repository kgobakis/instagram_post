import React from "react";
import Avatar from "react-avatar";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import Typography from "@material-ui/core/Typography";

export default class Comment extends React.Component {
  constructor(props) {
    super();
    this.state = {
      like: props.like,
      commentLikes: 0,
      timePosted: "",
    };

    this.addLike = this.addLike.bind(this);
    this.removeLike = this.removeLike.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount() {
    this.setState({
      commentLikes: this.props.commentLikes,
      timePosted: this.props.timePosted,
    });
  }
  handleLike = () => {
    let locallyLikedIds = JSON.parse(localStorage.getItem("locallyLikedIds"));

    if (!this.state.like) {
      locallyLikedIds.push(this.props.id.toString());
      localStorage.setItem("locallyLikedIds", JSON.stringify(locallyLikedIds));
      this.addLike();
    } else {
      let index = locallyLikedIds.indexOf(this.props.id.toString());
      if (index > -1) {
        locallyLikedIds.splice(index, 1);
      }
      localStorage.setItem("locallyLikedIds", JSON.stringify(locallyLikedIds));
      this.removeLike();
    }
  };
  addLike = () => {
    this.setState({
      commentLikes: this.state.commentLikes + 1,
      like: !this.state.like,
    });
  };
  removeLike = () => {
    this.setState({
      commentLikes: this.state.commentLikes - 1,
      like: !this.state.like,
    });
  };
  render() {
    return (
      <div style={styles.container}>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            // width: this.props.width / 4.3,
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
            <div
              style={{
                width: this.props.width / 5,
              }}
            >
              <strong style={{ fontSize: 15 }}>
                {`${this.props.username} `}
              </strong>
              {this.props.userLink ? (
                <a
                  style={{
                    textDecoration: "none",
                    color: "#0A366B",
                  }}
                  href=""
                >
                  {" "}
                  {this.props.userLink + " "}{" "}
                </a>
              ) : (
                ""
              )}
              <text variant="subtitle1" style={{ fontSize: 15.5 }}>
                {`${this.props.userComment} !!!!`}
              </text>
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                width: "150px",
                paddingTop: 8,
              }}
            >
              <strong
                style={{ color: "#999999", fontSize: 15, alignSelf: "center" }}
              >{`${this.props.timePosted}`}</strong>
              {this.state.commentLikes === 0 ? null : (
                <strong
                  style={{
                    color: "#999999",
                    fontSize: 13,
                    alignSelf: "center",
                  }}
                >
                  {`${this.state.commentLikes}`}{" "}
                  {this.state.commentLikes > 1 ? "likes" : "like"}
                </strong>
              )}
              <button
                style={{
                  color: "#2B94F6",
                  border: "none",
                  backgroundColor: "inherit",

                  fontSize: "16px",
                  cursor: "pointer",
                  display: "inline-block",
                  transform:
                    this.state.commentLikes === 0 ? "translate(-70px,0px)" : "",
                }}
                onClick={() => {
                  this.props.toggleReply(
                    this.props.username,
                    this.props.parentId ? this.props.parentId : this.props.id
                  );
                }}
              >
                <strong
                  style={{
                    color: "#999999",
                    fontSize: 13,
                  }}
                >{`Reply`}</strong>
              </button>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", paddingBottom: 15 }}>
          <span
            style={{ alignSelf: "center" }}
            onClick={() => this.handleLike()}
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
