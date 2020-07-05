import React from "react";
import Avatar from "react-avatar";
import { BsThreeDots } from "react-icons/bs";
import { Typography } from "@material-ui/core";

export default function UserInfo(props) {
  return (
    <div style={styles.container}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Avatar
          src={require("../../media/avatar.jpg")}
          size="42"
          round={true}
          textSizeRatio={1.75}
        />
        <div style={{ paddingLeft: 15 }}>
          <strong style={{ fontSize: 15 }}>{"kgobakis • Following"}</strong>
          <Typography variant="body2">Santorini Island, Greece</Typography>
        </div>
      </div>

      <div style={{ display: "flex" }}>
        <span
          style={{ alignSelf: "center" }}
          onClick={() => {
            alert("Three Dots!");
          }}
        >
          <BsThreeDots style={{ fontSize: 20 }} />
        </span>
      </div>
    </div>
  );
}
const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 15,
  },
};
