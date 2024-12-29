import React from "react";

const Child = ({ onShowModal }) => {
  return (
    <div>
      <h3>Modal Content</h3>
      <button onClick={onShowModal}>Show Modal</button>
    </div>
  );
};

export default Child;
