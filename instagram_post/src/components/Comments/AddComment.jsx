import React from "react";
import TextField from "@material-ui/core/TextField";
import store from "../../store";
import { connect } from "react-redux";

class AddComment extends React.Component {
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
    console.log("clicked");
    store.dispatch({
      type: "ADD_COMMENT",
      userComment: this.state.text,
      username: "kgobakis",
      avatar: require("../../media/avatar.jpg"),
      timePosted: "1m",
      commentLikes: 2,
    });
    this.forceUpdate();
    this.setState({
      text: "",
    });
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

store.subscribe(() => console.log(store.getState()));
export default connect()(AddComment);
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
};
