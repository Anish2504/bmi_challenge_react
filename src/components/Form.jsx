import React from "react";

const Form = props => {

  return (
    <form id="BmiForm" onSubmit={props.onSubmitHandler}>

    <select id="select-option" className="systemSelection" onChange={props.onChangeHandler}>
      <option value="metric">metric</option>
      <option value="imperial">imperial</option>      
    </select>

      <label htmlFor="weight">Weight</label>
      <input
        type="number"
        required
        placeholder="Weight in kgs"
        value={props.weight}
        name="weight"
        id="weight"
        onChange={props.onChangeHandler}
      />
      <label htmlFor="height">Height</label>
      <input
        type="number"
        required
        placeholder="Height in cm"
        value={props.height}
        name="height"
        id="height"
        onChange={props.onChangeHandler}
      />
      <button id='calculate'>Calculate BMI</button>
    </form>
  );
};

export default Form;