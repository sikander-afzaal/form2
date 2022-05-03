import "./App.css";
import React, { useState } from "react";
import logo from "./Assets/logo.png";
import social1 from "./Assets/social1.svg";
import social2 from "./Assets/social2.svg";
import social3 from "./Assets/social3.svg";
import meta from "./Assets/meta.svg";
import connect from "./Assets/connect.svg";
function App() {
  const [open, setOpen] = useState(false);
  return (
    <div className="App">
      <div
        onClick={() => setOpen((prev) => !prev)}
        className={`overlay ${open ? "display-flex" : ""}`}
      ></div>
      <div className={`pop-up ${open ? "display-flex" : ""}`}>
        <div className="pop">
          <img src={meta} alt="" />
          <h2>MetaMask</h2>
        </div>
        <div className="pop">
          <img src={connect} alt="" />
          <h2>Wallet Connect</h2>
        </div>
      </div>
      <div className="top-app">
        <img src={logo} alt="" />
        <p>The Trashiest, Most Sustainable Bitch in the Trailer Park</p>
      </div>
      <div className="bottom-app">
        <div className="box">
          <div className="row">
            <p>Total Weight</p>
            <p>0 KG</p>
          </div>
          <div className="row">
            <p>Your Wallet</p>
            <p>0.00 BNB</p>
          </div>
          <div className="row">
            <p>FOOD STAMPS</p>
            <p>0</p>
          </div>
          <input type="text" className="input" />
          <div className="btn-div">
            <button
              onClick={() => setOpen((prev) => !prev)}
              className="connect"
            >
              connect Wallet
            </button>
            <button className="yellow-btn">Fill in claim form</button>
          </div>

          <div className="btn-div">
            <button className="compound">STACK THAT BREAD</button>
            <button className="yellow-btn">Cash in Child Support</button>
          </div>
          <div className="row">
            <p>Profit Made</p>
            <p>0.000 BNB</p>
          </div>
        </div>

        <div className="box">
          <h2>Trailer Park Info</h2>
          <div className="row">
            <p>Daily Profit</p>
            <p>10%</p>
          </div>
          <div className="row">
            <p>APR</p>
            <p>3650%</p>
          </div>
          <div className="row">
            <p>Taxes</p>
            <p>10%</p>
          </div>
        </div>
        <div className="box">
          <h2>Referral Link</h2>
          <input type="text" className="input" />
          <p className="note">
            Receive 5% Straight into your profits , From any customers Brought
            by your referral code
          </p>
        </div>
        <div className="box last-box">
          <p className="note2">Fee breakdown:</p>
          <ul>
            <li>10% buy/sell Fee: of which</li>
            <li>5% Marketing funds</li>
            <li>5% Florida Man Token Buyback {"&"} Florida Man NFT Rewards</li>
          </ul>
        </div>
        <div className="social-div">
          <a href="#">
            <img src={social1} alt="" />
          </a>
          <a href="#">
            <img src={social2} alt="" />
          </a>
          <a href="#">
            <img src={social3} alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
