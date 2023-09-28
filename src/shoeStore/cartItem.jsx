import React, { Component } from "react";
import { connect } from "react-redux";
import {
  decreaseProductAmount,
  increaseProductAmount,
  removeProductFromCart,
} from "../redux";

class CartItem extends Component {
  render() {
    return (
      <div className="cart-item">
        <figure className="cart-item__img-container">
          <img
            src={this.props.shoes.image}
            alt="..."
            className="cart-item__img"
          />
        </figure>
        <div>
          <h5 className="cart-item__heading">{this.props.shoes.name}</h5>
          <div style={{ marginBottom: "16px" }}>
            <button
              className="cart-item__btn-amount"
              onClick={() => {
                this.props.handleDecreaseAmount(this.props.shoes);
              }}>
              -
            </button>
            <span className="cart-item__amount">{this.props.shoes.amount}</span>
            <button
              className="cart-item__btn-amount"
              onClick={() => {
                this.props.handleIncreaseAmount(this.props.shoes);
              }}>
              +
            </button>
          </div>
          <div style={{ fontWeight: "500" }}>{this.props.shoes.price} $</div>
        </div>
        <div className="cart-item__btn-close">
          {
            <svg
              className="cart-item__close-icon svg-icon"
              onClick={() => {
                this.props.handleDeleteProduct(this.props.shoes);
              }}
              viewBox="0 0 1024 1024"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M810.65984 170.65984q18.3296 0 30.49472 12.16512t12.16512 30.49472q0 18.00192-12.32896 30.33088l-268.67712 268.32896 268.67712 268.32896q12.32896 12.32896 12.32896 30.33088 0 18.3296-12.16512 30.49472t-30.49472 12.16512q-18.00192 0-30.33088-12.32896l-268.32896-268.67712-268.32896 268.67712q-12.32896 12.32896-30.33088 12.32896-18.3296 0-30.49472-12.16512t-12.16512-30.49472q0-18.00192 12.32896-30.33088l268.67712-268.32896-268.67712-268.32896q-12.32896-12.32896-12.32896-30.33088 0-18.3296 12.16512-30.49472t30.49472-12.16512q18.00192 0 30.33088 12.32896l268.32896 268.67712 268.32896-268.67712q12.32896-12.32896 30.33088-12.32896z" />
            </svg>
          }
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleDeleteProduct: (payload) => {
      dispatch(removeProductFromCart(payload));
    },
    handleIncreaseAmount: (payload) => {
      dispatch(increaseProductAmount(payload));
    },
    handleDecreaseAmount: (payload) => {
      dispatch(decreaseProductAmount(payload));
    },
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
