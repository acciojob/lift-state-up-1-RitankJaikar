import React from "react";

const Child = ({ onShowModal }) => {
  return (
    <div>
      <h3>Child Component</h3>
      <button onClick={onShowModal}>Show Modal</button>
    </div>
  );
};

export default Child;
