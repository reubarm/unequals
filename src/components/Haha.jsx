import { Card, Timeline, Typography } from "antd";
import React, { useMemo } from "react";
import { useMoralis } from "react-moralis";

const { Text } = Typography;

const styles = {
  title: {
    fontSize: "2em",
    fontWeight: "700",
    color: "#fff",
    textAlign: "center",
    margin: "30px 0 0",
    whiteSpace: "normal"
  },
  text: {
    fontSize: "24px",
    margin: "0",
  },
  card: {
    border: "1px solid #262835",
    borderRadius: "0.5rem",
    backgroundColor: "#262835",
    width: "100%",
    textAlign: "center",
    border: "none!!important",
  },
  timeline: {
    marginBottom: "-45px",
  },
};

export default function Haha({ isServerInfo }) {
  const { Moralis } = useMoralis();

  const isInchDex = useMemo(
    () => (Moralis.Plugins?.oneInch ? true : false),
    [Moralis.Plugins?.oneInch]
  );

  return (
    <div style={{ display: "flex", gap: "10px", maxWidth: "1000px", width: "100%" }}>
      <Card
        style={styles.card}
        title={
          <h1 style={styles.title}>
            Cryptocurrency exchange, made simple.
          </h1>
        }
      >
        <Text style={styles.text}>
          {/* <i>
            <span className="mango">Dollars and Euros</span> are a Central Bank
            Ponzi Scheme
          </i>{" "} */}
          <b><span className="mango">(just kidding 😂)</span></b>
          <br />
          <br /><br/>
          Sorry if the <span className="mango">logo, URL or title</span>{" "}
          makes anyone annoyed at me haha.
          <br />
          It's purely a quick joke - and full of love 🙂💕<br/><br/>I forked my other project and restyled in a couple hours 😇
          <br />I will take this "UNEQUALS" branded exchange app down over the weekend.
        </Text>
      </Card>
    </div>
  );
}
