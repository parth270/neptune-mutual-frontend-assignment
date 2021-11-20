import React from "react";
import classes from "./Details.module.css";
import {useWeb3React} from '@web3-react/core';

const Details = (props) => {

  const cancelHandler = () => {
    props.cancel();
  };

  const disconnectHandler=  ()=>{
    props.logoutHandler();
  } 

  return (
    <div className={classes.backdrop}>
      <div className={classes.container}>
        <div className={classes.head}>
          <p>Wallet details</p>
          <i className="fas fa-times" onClick={cancelHandler} />
        </div>
        <div className={classes["info-container"]}>
          <div className={classes["info-divider"]}>
            <p className={classes.Info}>KEY</p>
            <p className={classes.Info}>VALUE</p>
          </div>
          <div className={classes["info-divider"]}>
            <p className={classes.info}>Account</p>
            <p className={classes.info}>{`${props.account.substring(0,10)}...`}</p>
          </div>
          <div className={classes["info-divider"]}>
            <p className={classes.info}>Chain ID</p>
            <p className={classes.info}>97</p>
          </div>
          <div className={classes["info-divider"]}>
            <p className={classes.info}>Balance</p>
            <p className={classes.info}>{props.balance}</p>
          </div>
        </div>
        <p className={classes.wallet} >
            Wallet Details
        </p>
        <button className={classes.disconnect} onClick={disconnectHandler} >
            Disconnect
        </button>
      </div>
    </div>
  );
};

export default Details;
