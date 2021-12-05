import React from "react";

function Todo({ text, done }) {
  return (
    <>
      <span>{text}</span>
      {done}
    </>
  );
}

export default Todo;
