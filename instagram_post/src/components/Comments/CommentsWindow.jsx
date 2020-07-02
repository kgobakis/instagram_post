import React from "react";
import Avatar from "react-avatar";
import { BsThreeDots } from "react-icons/bs";
import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import { Typography } from "@material-ui/core";

export default function SubheaderDividers() {
  return (
    <div>
      <div style={styles.solidLine} />
      <div style={styles.container}>
        <div style={{ marginRight: 4 }}>
          <Avatar
            src="https://avatars2.githubusercontent.com/u/34740725?s=460&u=15efe798db9cf249e596e47f2591dcadda0e6ec0&v=4"
            size="44"
            round={true}
            textSizeRatio={1.75}
          />
        </div>
        <div style={{ margin: 6 }}>
          <strong style={{ fontSize: 15 }}>
            {"kgobakis \u00b7 Following"}
          </strong>
          <Typography variant="body2">Santorini Island, Greece</Typography>
        </div>
        <div>
          <BsThreeDots style={{ fontSize: 24 }} />
        </div>
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

    margin: 15,
  },
  avatar: {},
};
