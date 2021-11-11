import { useEffect } from "react";
import { useMoralis } from "react-moralis";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from "react-router-dom";
import Account from "components/Account";
import Chains from "components/Chains";
import TokenPrice from "components/TokenPrice";
import ERC20Balance from "components/ERC20Balance";
import ERC20Transfers from "components/ERC20Transfers";
import InchDex from "components/InchDex";
import NFTBalance from "components/NFTBalance";
import Wallet from "components/Wallet";
import { Menu, Layout } from "antd";
import "antd/dist/antd.css";
import NativeBalance from "components/NativeBalance";
import "./style.css";
import Haha from "components/Haha";
import Contract from "components/Contract/Contract";
import Text from "antd/lib/typography/Text";
const { Header, Footer } = Layout;

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    fontFamily: "Roboto, sans-serif",
    color: "#041836",
    marginTop: "130px",
    padding: "10px",
  },
  header: {
    position: "fixed",
    zIndex: 1,
    width: "100%",
    background: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontFamily: "Roboto, sans-serif",
    borderBottom: "2px solid rgba(0, 0, 0, 0.06)",
    padding: "0 10px",
    boxShadow: "0 1px 10px rgb(151 164 175 / 10%)",
  },
  headerRight: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    fontSize: "15px",
    fontWeight: "600",
  },
};
const App = ({ isServerInfo }) => {
  const { isWeb3Enabled, enableWeb3, isAuthenticated, isWeb3EnableLoading } =
    useMoralis();

  useEffect(() => {
    if (isAuthenticated && !isWeb3Enabled && !isWeb3EnableLoading) enableWeb3();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAuthenticated, isWeb3Enabled]);

  return (
    <Layout style={{ height: "100vh", overflow: "auto" }}>
      <Router>
        <Header style={styles.header}><a href="/" style={{width: "100%"}}><img src="/unequals-haha.svg" height="48"/></a>
          <Menu
            theme="light"
            mode="horizontal"
            style={{
              display: "flex",
              fontSize: "17px",
              fontWeight: "500",
              width: "100%",
              justifyContent: "center",
            }}
            defaultSelectedKeys={["Haha"]}
          >
            {/* <Menu.Item key="Haha">
              <NavLink to="/Haha">🚀 Quick Start</NavLink>
            </Menu.Item> */}
             <Menu.Item key="wallet">
              <NavLink to="/wallet">Your Wallet</NavLink>
            </Menu.Item>
            <Menu.Item key="dex">
              <NavLink to="/1inch">Exchange</NavLink>
            </Menu.Item>
            <Menu.Item key="balances">
              <NavLink to="/erc20balance">Balances</NavLink>
            </Menu.Item>
            {/* <Menu.Item key="transfers">
              <NavLink to="/erc20transfers">Transfers</NavLink>
            </Menu.Item>
            <Menu.Item key="nft">
              <NavLink to="/nftBalance">NFTs</NavLink>
            </Menu.Item> */}
            <Menu.Item key="contract">
              <NavLink to="/contract">Contracts</NavLink>
            </Menu.Item>
          </Menu>
          <div style={styles.headerRight}>
            <Chains />
            <TokenPrice
              address="0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2"
              chain="eth"
              image="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethereum-icon-purple.svg/480px-Ethereum-icon-purple.svg.png"
              size="40px"
            />||
            <NativeBalance />
            <Account />
          </div>
        </Header>
        <div style={styles.content}>
          <Switch>
            <Route path="/Haha">
              <Haha isServerInfo={isServerInfo} />
            </Route>
            <Route path="/wallet">
              <Wallet />
            </Route>
            <Route path="/1inch">
              <InchDex chain="eth" />
            </Route>
            <Route path="/erc20balance">
              <ERC20Balance />
            </Route>
            <Route path="/erc20transfers">
              <ERC20Transfers />
            </Route>
            <Route path="/nftBalance">
              <NFTBalance />
            </Route>
            <Route path="/contract">
              <Contract />
            </Route>
            <Route path="/nonauthenticated">
              <>Please login using the "Authenticate" button</>
            </Route>
          </Switch>
          <Redirect to="/Haha" />
        </div>
      </Router>
      <Footer style={{ textAlign: "center", position: "absolute", width: "100%", bottom: "0" }}>


        <Text style={{ display: "block" }}>
          Made with love (as a joke 😇❤️) for Ian, Rich, Shane and the future of Blockchain, by {" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://reubarm.com"
            className="mango"
          >
            Reuben Armstrong 
          </a>
        </Text>
      </Footer>
    </Layout>
  );
};

export default App;
