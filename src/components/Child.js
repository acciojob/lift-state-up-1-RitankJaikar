import React from "react";

const Child = ({ onShowModal }) => {
  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={onShowModal}>Show Modal</button>
    </div>
  );
};

export default Child;
