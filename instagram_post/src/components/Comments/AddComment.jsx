import React from "react";
import TextField from "@material-ui/core/TextField";

export default class AddComment extends React.Component {
  constructor() {
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
    this.props.addComment(this.state.text);
  }

  render() {
    return (
      <div style={styles.container}>
        <TextField
          id="standard-disabled"
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="Add a comment..."
        />
        <span onClick={this.handleSubmit}>
          <text color="#F0F6FD">POST</text>
        </span>
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
