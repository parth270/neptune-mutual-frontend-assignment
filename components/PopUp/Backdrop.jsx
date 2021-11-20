import React from 'react';
import ReactDOM from 'react-dom';
import Wallet from './Wallet';
import Details from './Details';
import {useState,useEffect} from 'react';
import Web3 from "web3";
import {useWeb3React} from '@web3-react/core';


const Backdrop=(props)=>{
    const [connected,setConnected]=useState(false);
    const [currentAccount,setCurrent]=useState(null);
    const [currBalance,setBalance]=useState(null);

    const {deactivate}=useWeb3React();



    const loginHandler=async(e)=>{
        const web3=new Web3(e);
        const accounts= await web3.eth.getAccounts();
        const balance = await web3.eth.getBalance(accounts[0]);
        if (accounts.length===0) {
            console.log("not connected");
        }else if(accounts[0]!==currentAccount){
            setCurrent(accounts[0]);
            setBalance(balance);
        }
        setConnected(!connected);
    }

    const logoutHandler=()=>{
       setConnected(!connected)
    }

    return(
        <React.Fragment>
            <>{connected?<Details cancel={()=>{props.cancel()}} account={currentAccount} balance={currBalance} logoutHandler={logoutHandler} />:<Wallet connected={loginHandler}  cancel={()=>{props.cancel()}} />}</>
        </React.Fragment>
    )
}

export default Backdrop;