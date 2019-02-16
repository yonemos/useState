import React, { useState } from "react";

const toggle = props => {
  const [toggleState, setToggleState] = useState("on");
  const acrodion = () => {
    setToggleState(toggleState === "off" ? "on" : "off");
  };
  return (
    <div className={`switch ${toggleState}`} onClick={acrodion}>
      <p>なんかテキストを書いてみた</p>
    </div>
  );
};
export default toggle;
