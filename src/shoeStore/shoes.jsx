import React, { Component, useState } from "react";
import { Button } from "antd";
import ShoesDetail from "./shoesDetail";
import { connect } from "react-redux";
import { viewShoesDetail } from "../redux";

class Shoes extends Component {
  render() {
    let {
      id,
      name,
      alias,
      price,
      description,
      shortDescription,
      quantity,
      image,
    } = this.props.shoes;
    return (
      <div
        className="card"
        onClick={() => {
          // this.props.handleViewProduct(this.props.shoes);
        }}>
        <figure className="card__img-container" style={{}}>
          <img
            src={image}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "contain",
              objectPosition: "center",
            }}
            alt="..."
          />
        </figure>
        <div>
          <h5 className="card__heading">{name}</h5>
          <p className="card__price">{price}$</p>
          <Button
            type="primary"
            onClick={() => {
              this.props.handleViewProduct(this.props.shoes);
            }}>
            See more
          </Button>
          <ShoesDetail />
        </div>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    handleViewProduct: (payload) => {
      dispatch(viewShoesDetail(payload));
    },
  };
};

export default connect(null, mapDispatchToProps)(Shoes);
