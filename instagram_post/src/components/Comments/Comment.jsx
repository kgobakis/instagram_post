import React from "react";
import Avatar from "react-avatar";
import { BsHeart } from "react-icons/bs";

export default function Comment(props) {
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
            {`${props.username} `}
          </strong>
<text style={{  fontSize: 15 }}> {`${props.userComment}`}</text>
        </div>
   
        <span style={{ alignSelf: "center", marginLeft: 80}} onClick={() => {alert("Three Dots!")}}>
<BsHeart style={{ fontSize: 14, color: "#858585"}} />      

        </span>
      </div>
    </div>
  );
}
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

 