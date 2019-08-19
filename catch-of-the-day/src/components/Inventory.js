import React from "react";
import AddFishForm from "./AddFishForm";

const Inventory = props => (
  <div className="inventory">
    <h2>Inventory!</h2>
    <AddFishForm addFish={props.addFish} />
    <button onClick={props.loadSampleFishes}>Load sample fishes</button>
  </div>
);

export default Inventory;
