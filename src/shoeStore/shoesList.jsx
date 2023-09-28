import React, { Component } from "react";
import { connect } from "react-redux";
import Shoes from "./shoes";

class ShoesList extends Component {
  renderProductGridHTML = (array) => {
    return array.map((product) => {
      return <Shoes key={product.id} shoes={product} />;
    });
  };

  render() {
    return (
      <div className="shoes-list">
        {this.renderProductGridHTML(this.props.shoesList)}
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    shoesList: state.shoesList,
  };
};

export default connect(mapStateToProps, null)(ShoesList);
