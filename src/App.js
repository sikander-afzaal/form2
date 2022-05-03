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
        <p className="small-p">
          For Absolute Best Returns, Compound for 6 straight days, then Cash in
          Child Support on the 7th. Rinse, Repeat - and you will make ridiculous
          dividends that far exceed base 4% daily APR.
        </p>
        <p className="small-p">
          If you go too long without compounding, your Food Stamp value will
          decrease rapidly, until the contract outpaces your rewards.
        </p>
      </div>
      <div className="bottom-app">
        <div className="box">
          <div className="row">
            <p>Total Value Locked</p>
            <p>0</p>
          </div>
          <div className="row">
            <p>claimable food stamps</p>
            <p>0 stamps</p>
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
            <button className="yellow-btn">BUY FOOD STAMPS</button>
          </div>

          <div className="btn-div">
            <button className="compound">COMPOUND REWARDS</button>
            <button className="yellow-btn">Cash in Child Support</button>
          </div>
          <div className="row">
            <p>CHILD SUPPORT COLLECTED</p>
            <p>0.000 BNB</p>
          </div>
        </div>

        <div className="box">
          <h2>Trailer Park Info</h2>
          <div className="row">
            <p>BASE DAILY RETURNS (DOES NOT INCLUDE COMPOUNDS)</p>
            <p>4%</p>
          </div>
          <div className="row">
            <p>APR (DOES NOT INCLUDE COMPOUNDS)</p>
            <p>3650%</p>
          </div>
          <div className="row">
            <p>Taxes</p>
            <p>6%</p>
          </div>
        </div>
        <div className="box">
          <h2>Referral Link</h2>
          <input type="text" className="input" />
          <p className="note">
            5% Referral fee made from anyone who uses your Referral Code to Buy
            & Compound. Referral fee does not come out of their pocket.
          </p>
        </div>
        <div className="box last-box">
          <h2>Fee Breakdown:</h2>
          <ul>
            <li>6% Buy/Sell Fee</li>
            <li>3% Dev/Marketing/TVL Injection</li>
            <li>
              3% Florida Man Token Buybacks {"&"} NFT Rewards Pool Injection
            </li>
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
