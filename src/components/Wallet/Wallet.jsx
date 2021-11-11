import Transfer from "./components/Transfer";
import NativeBalance from "../NativeBalance";
import Address from "../Address/Address";
import Blockie from "../Blockie";
import { Card } from "antd";

const styles = {
  title: {
    fontSize: "30px",
    fontWeight: "600",
    color: "#FFF"
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    color: "#FFF"
  },
  card: {
    boxShadow: "0 0.5rem 1.2rem rgb(189 197 209 / 20%)",
    borderRadius: "1rem",
    fontSize: "16px",
    width: "450px",
    fontWeight: "500",
    backgroundColor: "#262835",
    color: "#FFF"
  },
};

function Wallet() {
  return (
    <Card
      style={styles.card}
      title={
        <div style={styles.header}>
          <div style={{display: "block"}}>
<h1 style={styles.title}>Your Wallet</h1><br/>
</div>
          <Blockie scale={5} avatar currentWallet /><br/>
          <Address size="6" copyable />
          <NativeBalance /><br/>
        </div>
      }
    >
      <Transfer />
    </Card>
  );
}

export default Wallet;
