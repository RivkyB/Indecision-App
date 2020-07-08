import React from "react";

const Action = (props) => (
  <div>
    <button
      onClick={props.handlePick}
      disabled={!props.hasOptions}
      className="big-button"
    >
      Where should I go?
    </button>
  </div>
);

export default Action;
