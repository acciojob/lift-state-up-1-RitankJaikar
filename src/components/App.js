import React, { useState } from "react";
import Child from "./Child";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => {
    setShowModal(true); // Update state to true when called
  };

  return (
    <div className="parent">
      <h1>Parent Component</h1>
      <p>This is the modal content.</p>
      <Child onShowModal={handleShowModal} />
    </div>
  );
};

export default App;
