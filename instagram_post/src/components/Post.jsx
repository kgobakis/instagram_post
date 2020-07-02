import React from "react";
import { Slideshow } from "./Slideshow/Slideshow";
import CommentsWindow from "../components/Comments/CommentsWindow";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";

class Post extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }
  render() {
    return (
      <div style={styles.container}>
        <Paper elevation={3}>
          <div style={styles.containerInside}>
            <Divider style={{ marginTop: 20 }} />
            <div
              style={{
                height: this.state.height - 50,
                width: this.state.width / 1.3,
              }}
            >
              <Slideshow height={this.state.height} width={this.state.width} />
            </div>
            <div
              style={{
                width: this.state.width - this.state.width / 1.3 - 35,
              }}
            >
              <CommentsWindow />
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}
export default Post;

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    margin: 15,
  },
  containerInside: {
    display: "flex",
    flexDirection: "row",
  },
};
