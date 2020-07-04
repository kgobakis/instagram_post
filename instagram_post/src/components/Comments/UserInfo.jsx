import React from "react";
import Avatar from "react-avatar";
import { BsThreeDots } from "react-icons/bs";
import { Typography } from "@material-ui/core";


export default function UserInfo() {
  return (
    <div>
      <div style={styles.solidLine} />
      <div style={styles.container}>
      <div >
          <Avatar          
            src="https://randomuser.me/api/portraits/men/83.jpg"
            size="42"
            round={true}
            textSizeRatio={1.75}
          />
        </div>
        <div style={{ margin:4 , top: 10, }}>
          <strong style={{ fontSize: 15 }}>
            {"kgobakis \u00b7 Following"}
          </strong>
          <Typography variant="body2">Santorini Island, Greece</Typography>
        </div>
        <span style={{ alignSelf: "center", marginLeft: 80}} onClick={() => {alert("Three Dots!")}}>
<BsThreeDots style={{ fontSize: 20}} />
        </span>
        <div style={styles.solidLine} />

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
