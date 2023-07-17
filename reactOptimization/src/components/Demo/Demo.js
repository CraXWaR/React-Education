import React, { memo } from "react";

const Demo = (props) => {
  return <p>{props.show ? "This is new paragrah!" : ""}</p>;
};

export default memo(Demo);
