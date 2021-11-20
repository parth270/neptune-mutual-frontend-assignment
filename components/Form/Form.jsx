import React,{useState} from 'react';
import Card from "../Card/Card";
import classes from "./Form.module.css";
import Backdrop from "../PopUp/Backdrop";

const Form = () => {
  const [value, setValue] = useState(0);
  const [show,setShow]=useState(false);

  const firstHandler = (event) => {
    if (event.target.value < 0) {
      setValue(0);
    } else {
      setValue(event.target.value);
    }
  };

  const secondHandler = (event) => {
    if (!(event.target.value<0) || !event.target.value){
      setValue((event.target.value / 3));
    }
  };

  const valueHandler=(n)=>{

    if(n%1===0){
      return n;
    }else{
      return n.toFixed(2)
    }

  }

  const clickHandler=()=>{
      setShow(!show);
  }

  return (
    <>
      {show && <Backdrop cancel={clickHandler} />}
      <Card>
        <h1 className={classes.title}>Crypto Converter</h1>
        <div className={classes.margin} />
        <div className={classes["input-container"]}>
          <label htmlFor="">NEP:</label>
          <input
            type="number"
            name=""
            onChange={firstHandler}
            id=""
            value={valueHandler(value)}
          />
        </div>
        <div className={classes["input-container"]}>
          <label htmlFor="">BUSD:</label>
          <input
            type="number"
            name=""
            onChange={secondHandler}
            value={valueHandler(value*3)}
            id=""
          />
        </div>
        <p className={classes.currency}>1 NEP = 3 BUSD</p>
        <p className={classes.wallet}>
          <span onClick={clickHandler} >Check Wallet details</span>
        </p>
      </Card>
    </>
  );
};

export default Form;
