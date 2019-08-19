import React from "react";
import { formatPrice } from "../helpers";

class Order extends React.Component {
  renderOrder = key => {
    const fish = this.props.fishes[key];
    const { name, price, status } = fish;
    const count = this.props.order[key];
    const isAvailable = status === "available";
    if (isAvailable) {
      return (
        <li key={key}>
          {count} lbs {name}
          {formatPrice(count * price)}
        </li>
      );
    }
    return (
      <li key={key}>Sorry {fish ? name : "fish"} is no longer available</li>
    );
  };

  render() {
    const orderIds = Object.keys(this.props.order);
    const total = orderIds.reduce((prevTotal, key) => {
      const fish = this.props.fishes[key];
      const count = this.props.order[key];
      const isAvailable = fish && fish.status === "available";
      if (isAvailable) {
        return prevTotal + count * fish.price;
      }
      return prevTotal;
    }, 0);

    return (
      <div className="order-wrap">
        <h1>Order</h1>
        <ul className="order">{orderIds.map(this.renderOrder)}</ul>
        <div className="total">
          Total:
          <strong>{formatPrice(total)}</strong>
        </div>
      </div>
    );
  }
}

export default Order;
