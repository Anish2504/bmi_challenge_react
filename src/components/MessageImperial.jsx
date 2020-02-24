import React from "react";

const MessageImp = props => {
  return (
    <p id='bmi-imp-message'>
      You are {props.bmiImperialMessage} with a BMI of {props.bmiImperialValue}
    </p>
  );
};

export default MessageImp;