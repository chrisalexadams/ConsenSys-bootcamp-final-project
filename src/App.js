import logo from "./images/SCW.png";
import "./App.css";
import React, { useContext, useState, useEffect } from "react";
import { Web3Context } from "./web3";
import Cards from "./Cards/Cards";

//const { ethers } = require("ethers");

  // const App = () => {
    function App() {
    const { account, connectWeb3, logout } = useContext(Web3Context);
    const [supplyAmount, setSupplyAmount] = useState("");

    const supplyEth = async () => {
      if (supplyAmount <= 0) {
        alert("You need to supply more than 0 ETH");
        return;
      }
      if (isNaN(supplyAmount) === true) {
        alert("You need to type numbers");
        return;
      }
    }
    
      if (account === null) {
        return (
          <div className="App">
            <header className="App-header">
            <img src={logo} className="App-logo" width="" alt="SCW-logo" />
              <div>
                {account == null ? (
                <button  onClick={connectWeb3}>Connect to Ethereum</button>
                ) : (
              <div>
                  <p>Account: {" "}
                {account.slice(0, 4) +
                "..." +
                account.slice(38, 42)}
                  </p>
                <button onClick={logout}>Logout</button>
              </div>
              )}
              </div>
          </header>
        </div> );
        } else {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {account == null ? (
            <button onClick={connectWeb3}>Connect Web3 Dude</button>
          ) : (
            <div>
              <p>Account: {" "}
              {account.slice(0, 4) +
            "..." +
            account.slice(38, 42)}
              </p>
              <button onClick={logout}>Logout Dude</button>
            </div>
          )}
        </div>
        <br />
        <img src={logo} className="App-logo" width="" alt="SCW-logo" />
        <Cards
           title1="Send ERC20 to Smart Wallet"
           //text1={collateralBalance}
           placeholder1="Send ERC20"
           onChange1={(e) => setSupplyAmount(e.target.value)}
           button1="Send"
           onClick1={() => supplyEth()}
           title2="Send ETH to Smart Wallet"
           //text3={checkoutBalance}
           placeholder2="Send ETH"
           onChange2={(e) => setSupplyAmount(e.target.value)}
           button2="Send"
           onClick2={() => supplyEth()}
           title3="Send ETH to Smart Wallet"
           //text3={checkoutBalance}
           placeholder3="Send ETH"
           onChange3={(e) => setSupplyAmount(e.target.value)}
           button3="Send"
           onClick3={() => supplyEth()}
       />
      </header>
    </div>
  );
}
  }
export default App;
