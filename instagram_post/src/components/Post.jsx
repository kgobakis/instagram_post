import React from "react";
import { Slideshow } from "./Slideshow";
import Background from "../media/1.jpg";
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
      <div
        style={{
          height: this.state.height,
          width: this.state.width / 2,
        }}
      >
        <Slideshow height={this.state.height} width={this.state.width} />
      </div>
    );
  }
}
export default Post;

const styles = {
  Slideshow: {},
};
