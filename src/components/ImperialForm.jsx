import React from "react";

const ImperialForm = props => {
  return (
    <form onSubmit={props.onSubmitHandlerImperial}>
      <label htmlFor="weightP">Weight Pounds</label>
      <input
        type="number"
        required
        placeholder="Weight in lbs"
        value={props.weightP}
        name="weightP"
        id="weightP"
        onChange={props.onChangeHandlerImperial}
      />
      <label htmlFor="heightIn">HeightIn</label>
      <input
        type="number"
        required
        placeholder="Height in in"
        value={props.heightIn}
        name="heightIn"
        id="heightIn"
        onChange={props.onChangeHandlerImperial}
      />
      <button id='calculateImp'>Calculate Imperial BMI</button>
    </form>
  );
};

export default ImperialForm;