import React, { Component } from "react";
import CartItem from "./cartItem";
import { connect } from "react-redux";
import { calculateProductsPrice } from "../redux";
// import {} from "./redux";

class Cart extends Component {
  componentDidUpdate() {
    this.props.handleCalculateTotal();
  }

  renderCartItemHTML = (array) => {
    return array.map((item, currIndex) => {
      return <CartItem key={currIndex} shoes={item} />;
    });
  };

  render() {
    return (
      <section className="section--cart">
        <div className="cart">
          <div className="cart__item-container">
            {this.renderCartItemHTML(this.props.cartItems)}
          </div>

          <div className="cart__footer">
            <div className="cart__footer--subtotal" style={{}}>
              <span>Subtotal</span>
              <span>{this.props.subTotal}$</span>
            </div>
            <div className="cart__footer--tax">
              <span>Tax</span>
              <span>{this.props.tax}$</span>
            </div>
            <div className="cart__footer--total">
              <span>Total</span>
              <span>{this.props.total}$</span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    cartItems: state.cart,
    subTotal: state.subTotal,
    tax: state.tax,
    total: state.total,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    handleCalculateTotal: () => {
      dispatch(calculateProductsPrice());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
