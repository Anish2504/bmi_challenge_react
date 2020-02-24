import React from "react";
import { shallow } from "enzyme";
import ImperialForm from "../components/ImperialForm";

describe("Form", () => {
  const handleChange = jest.fn();
  const handleSubmit = jest.fn();
  const wrapper = shallow(
    <ImperialForm
      weight="155"
      height="5"
      onChangeHandler={handleChange}
      onSubmitHandlerImperial={handleSubmit}
    />
  );

  it("renders with weight prop", () => {
    expect(wrapper.find("#weight").props().value).toEqual("90");
  });
  it("renders with height prop", () => {
    expect(wrapper.find("#height").props().value).toEqual("190");
  });

  it("onchange the onChangeHandler is being called", () => {
    wrapper.find("#weight").simulate("change");
    expect(handleChange).toHaveBeenCalled();
    wrapper.find("#height").simulate("change");
    expect(handleChange).toHaveBeenCalled();
  });

  it("on submit the onSubmitHandler is being called", () => {
    wrapper.find("#form").simulate("submit");
    expect(handleSubmit).toHaveBeenCalled();
  });
});
