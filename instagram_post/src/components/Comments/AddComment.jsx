import React from "react";
import { FormControl, TextField } from "@material-ui/core";
import { connect } from "react-redux";
import { MdCancel } from "react-icons/md";

class AddComment extends React.Component {
  constructor(props) {
    super();
    this.state = {
      text: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ text: event.target.value });
  }
  handleSubmit() {
    if (this.props.usernameReply) {
      this.props.makeReply(
        this.props.usernameReply,
        this.props.id,
        this.state.text
      );
    } else {
      this.props.addComment(this.state.text);
      this.setState({ text: "" });
    }
  }
  //ADD REPLIESSESESESESES
  render() {
    return (
      <div style={styles.container}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <FormControl>
            <TextField
              onChange={this.handleChange}
              value={this.state.text}
              placeholder="Add a comment..."
              onSubmit={this.state.text.length > 0 ? this.handleSubmit : null}
            />
          </FormControl>
          {this.props.usernameReply ? (
            <div style={{ display: "flex", alignItems: "center" }}>
              <span
                style={{ marginTop: 5, marginLeft: 5 }}
                onClick={this.props.emptyReply}
              >
                {" "}
                <MdCancel />{" "}
              </span>
              <text>Replying to {this.props.usernameReply}</text>
            </div>
          ) : null}
        </div>
        <button
          style={styles.button}
          onClick={this.state.text.length > 0 ? this.handleSubmit : null}
        >
          <strong>Post</strong>
        </button>
      </div>
    );
  }
}

export default connect()(AddComment);
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
  button: {
    color: "#2B94F6",
    border: "none",
    backgroundColor: "inherit",
    padding: "14px 14px",
    fontSize: "16px",
    cursor: "pointer",
    display: "inline-block",
  },
};
