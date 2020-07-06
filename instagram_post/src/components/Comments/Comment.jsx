import React from "react";
import Avatar from "react-avatar";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

export default class Comment extends React.Component {
  constructor() {
    super();
    this.state = {
      like: false,
      commentLikes: "",
      timePosted: "",
    };

    this.addLike = this.addLike.bind(this);
    this.removeLike = this.removeLike.bind(this);
    this.handleLike = this.handleLike.bind(this);
  }

  componentDidMount() {
    this.setState({
      like: false,
      commentLikes: this.props.commentLikes,
      timePosted: this.props.timePosted,
    });
  }
  handleLike() {
    if (this.state.like) {
      this.removeLike();
    } else {
      this.addLike();
    }
  }
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
    const { isReply } = this.props;
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
            <div style={{ width: this.props.width / 5 }}>
              <strong style={{ fontSize: 15 }}>
                {`${this.props.username} `}
              </strong>
              <text style={{ fontSize: 15 }}>
                {`${this.props.userComment}`}
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
              {this.state.commentLikes === 0 ? (
                <div style={{ marginLeft: -20 }} />
              ) : (
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
              <span
                onClick={() => {
                  alert("This comment id is: ", this.props.id);
                }}
              >
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
