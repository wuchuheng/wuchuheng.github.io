import React, { FunctionComponent, ReactElement, useState } from "react";

const TerminalColorOutputDemo: React.FC<{}> = () => {
  return (
    <span
      style={{
        color: "green",
        backgroundColor: "blue",
        fontWeight: "bold",
        padding: "5px 10px",
      }}
    >
      Hello world
    </span>
  );
};

export default TerminalColorOutputDemo;
