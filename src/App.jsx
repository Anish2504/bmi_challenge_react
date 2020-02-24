import React, { Component } from "react";

import Form from "./components/Form";
import ImperialForm from "./components/ImperialForm";
import Message from "./components/Message";
import MessageImp from "./components/MessageImperial";
import { calculateBmi } from "./helpers/bmiHelper";
import { calculateImperialBmi } from "./helpers/bmiImperial";

class App extends Component {
  state = {
    weight: "",
    height: "",    
    weightP:"",
    heightIn:"",
    bmiValue: "",
    bmiMessage: "",
    bmiImperialValue: "",
    bmiImperialMessage: ""

  };

  onChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitHandler = e => {
    e.preventDefault();
    const [bmiValue, bmiMessage] = calculateBmi(
      this.state.weight,
      this.state.height
    );
    this.setState({ bmiValue: bmiValue, bmiMessage: bmiMessage });
  };

  onChangeHandlerImperial = i => this.setState({ [i.target.name]: i.target.value });

  onSubmitHandlerImperial = i => {
    i.preventDefault();
    const [bmiImperialValue, bmiImperialMessage] = calculateImperialBmi(
      this.state.weightP,
      this.state.heightIn
    );
    this.setState({ bmiImperialValue: bmiImperialValue, bmiImperialMessage: bmiImperialMessage });
  };

  render() {
    return (
      <div>
        <div id="MetricForm">
          <h2> This is the metric form</h2>
          <Form
            weight={this.state.weight}
            height={this.state.height}
            onChangeHandler={this.onChangeHandler}
            onSubmitHandler={this.onSubmitHandler}
          />
          {this.state.bmiValue && (
            <Message
              bmiValue={this.state.bmiValue}
              bmiMessage={this.state.bmiMessage}
            />
          )}
        </div>

        <div id="ImperialForm">
          <h2>This is the Imperial form</h2>
          <ImperialForm
            weightP={this.state.weightP}
            heightIn={this.state.heightIn}
            onChangeHandlerImperial={this.onChangeHandlerImperial}
            onSubmitHandlerImperial={this.onSubmitHandlerImperial}
          />
          {this.state.bmiImperialValue && (
            <MessageImp
              bmiImperialValue={this.state.bmiImperialValue}
              bmiImperialMessage={this.state.bmiImperialMessage}
            />
          )}
        </div>
      </div>
    );
  }
}

export default App;