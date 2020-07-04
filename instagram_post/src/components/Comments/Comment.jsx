import React from "react";
import Avatar from "react-avatar";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { render } from "@testing-library/react";

class Comment extends React.Component{
state ={
      like: false,
      commentLikes: this.props.commentLikes,
      timePosted: this.props.timePosted
   }



  render(){
  return (
    <div>
      <div style={styles.container}>
        <div>
          <Avatar
            src="https://randomuser.me/api/portraits/women/71.jpg"
            size="42"
            round={true}
            textSizeRatio={1.75}
          />
        </div>
        <div style={{ margin: 4,top: 10, flexWrap: "wrap"}}>
        <strong style={{ fontSize: 15 }}>
            {`${this.props.username} `}
          </strong>
<text style={{  fontSize: 15 }}> {`${this.props.userComment}`}</text>
        </div>
   
        <span style={{ alignSelf: "center", marginLeft: 80}} onClick={() => this.setState({like:!this.state.like})}>
  {this.state.like ? <AiFillHeart style={{ fontSize: 18, color: "#FF0000"}} />  :   <AiOutlineHeart style={{ fontSize: 18, color: "#858585"}} />   }

        </span>
      </div>
    </div>
  );
}
}
export default Comment

const styles = {
  solidLine: {
    borderTop: "1.4px solid #bbb",
  },
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
  avatar: {},
};

 