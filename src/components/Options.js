import React from "react";
import Option from "./Option";

const Options = (props) => (
  <div>
    <div className="widget-header">
      <h3 className="widget-header__title">Your Options</h3>
      <button onClick={props.handleDeleteOptions} className="button--link">
        Remove All
      </button>
    </div>
    {props.options.length === 0 && (
      <p className="widget__message">Please add an option to get started</p>
    )}
    {props.options.map((option, index) => {
      return (
        <Option
          key={option}
          optionText={option}
          count={index + 1}
          handleDeleteOneOption={props.handleDeleteOneOption}
        ></Option>
      );
    })}
  </div>
);

export default Options;