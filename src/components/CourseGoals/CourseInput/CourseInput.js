import React, { useState } from "react";

import Button from "../../UI/Button/Button";
import "./CourseInput.css";
//import styled from "styled-components";

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddGoal(enteredValue);
    // setEnteredValue('')
  };

  // const FormControl= styled.div`
  //   margin: 0.5rem 0;

  //   & label {
  //     font-weight: bold;
  //     display: block;
  //     margin-bottom: 0.5rem;
  //     color: ${props => (props.invalid ? 'red' : 'black') };
  //   }

  //   & input {
  //     display: block;
  //     width: 100%;
  //     border: 1px solid ${props => (props.invalid ? 'red' : '#ccc') };
  //     background-color:  ${ props => (props.invalid ?  'rgb(207, 142, 142)' : 'transparent')};
  //     font: inherit;
  //     line-height: 1.5rem;
  //     padding: 0 0.25rem;
  //   }

  //   & input:focus {
  //     outline: none;
  //     background: #fad0ec;
  //     border-color: #8b005d;
  //   }
   
  // `;

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`form-control ${!isValid ? 'invalid':''}`}>
        <label
       // style={{ color: isValid ? "black" : "red" }} // inline styling
        >Course Goal</label>
        <input
          type="text"
          // style={{
          //   borderColor: isValid ? "#ccc" : "red",
          //   background: !isValid ? "salmon" : "transparent",
          // }}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>

    // {********************************using styled components********************}
  //   <form onSubmit={formSubmitHandler}>
  //     <FormControl invalid={!isValid}>
  //       <label
  //       // style={{ color: isValid ? "black" : "red" }} // inline styling
  //       >
  //         Course Goal
  //       </label>
  //       <input
  //         type="text"
  //         // style={{
  //         //   borderColor: isValid ? "#ccc" : "red",
  //         //   background: !isValid ? "salmon" : "transparent",
  //         // }}
  //         onChange={goalInputChangeHandler}
  //       />
  //     </FormControl>
  //     <Button type="submit">Add Goal</Button>
  //   </form>
  );
};

export default CourseInput;