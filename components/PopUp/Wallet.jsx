import React from 'react';
import classes from './Wallet.module.css';
import {useState} from 'react';

const Wallet=(props)=>{

    const [loading,setLoading]=useState(false);

    const detectProvider=()=>{
        let provider;
        if(window.ethereum){
            provider=window.ethereum;
        }else if (window.web3) {
            provider=window.web3.currentProvider;
        }else{
            console.log("error");
        }
        return provider;
    }

    const connectHandler=async()=>{
        const provider=detectProvider();
        if (provider) {
            if (provider!==window.ethereum) {
                console.log("error2");
            }
            setLoading(true);
            await provider.request({
                method:"eth_requestAccounts"
            })
            setLoading(false);
            props.connected(provider);
        }

    }

    const cancelHandler=()=>{
        props.cancel();
    }

    return(
        <div className={classes.backdrop}>
            <div className={classes.container} >
                <div className={classes.head} >
                    <p>Card Details</p>
                    <i className="fas fa-times" onClick={cancelHandler} />
                </div>
                <div className={classes.body} >
                    {loading?<p className={classes['body-load']}>Connecting...</p>:<p className={classes['body-p']} >Card is not Connected, Please connect the card first</p>}
                </div>
                <div className={classes['button-container']} >
                    <button type="submit" className={classes.left} onClick={connectHandler} >
                        Connect
                    </button>
                    <button className={classes.right}  onClick={cancelHandler} >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Wallet;