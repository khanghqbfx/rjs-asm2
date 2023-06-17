
import React from "react";
import { useContext, useState } from "react";
import ResultList from "../ResultList/ResultList";
import classes from "./SearchForm.module.css";
import ExampleContext from "../stone/Stone";
import { FaSearch } from "react-icons/fa";


const SearchForm = () => {
  const [input, setInput] = useState("");
   const [isValid, setIsValid] = useState(true);
  const ctx = useContext(ExampleContext);
   const [result, setResult] = useState('');

  // // Kiểm tra valid input
   const inputChangeHandler = (event) => {
     if (event.target.value.trim().length > 0) {
       setIsValid(true);
    }
     setInput(event.target.value);
   };

  // // Sự kiện click search
   const submitHandler = (event) => {
     event.preventDefault();
     if (input.trim().length === 0) {
     setIsValid(false);
       return;
     }
     setResult(<ResultList query={input} />);
   };

  // // Sự kiện click reset
   const resetHandler = () => {
       setIsValid(true);
     setInput("");
    
   };

  return (
    <div className={classes.search}>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      * <form
        className={`${classes.searchform} ${!isValid && classes.invalid}`}
        onSubmit={submitHandler}
        onReset={resetHandler}
      >
        <div>
          <input
            type="text"
            value={input}
            onChange={inputChangeHandler}
          ></input>
          <FaSearch  className={classes.icon} />
        </div>
        <div>
          <button className={classes.btnreset} type="reset">
            Reset
          </button>
          <button className={classes.btnsearch} type="submit">
            Search
          </button>
        </div>
      </form> 
       {result} 
    </div>
  );
};

export default SearchForm;