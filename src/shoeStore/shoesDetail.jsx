import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal, Button } from "antd";
import { closeShoesDetail, addShoesToCart } from "../redux";

class ShoesDetail extends Component {
  render() {
    let {
      id,
      name,
      alias,
      price,
      description,
      Nike,
      shortDescription,
      quantity,
      image,
    } = this.props.shoesDetail;
    return (
      <Modal
        open={this.props.modalStatus}
        onOk={this.props.modalStatus}
        onCancel={() => {
          this.props.handleCloseShoesDetail();
        }}
        mask={false}
        width={1000}
        centered
        footer={[
          <Button
            key="close"
            onClick={() => {
              this.props.handleCloseShoesDetail();
            }}>
            Close
          </Button>,
        ]}>
        <div className="shoes-detail">
          <div className="section-A">
            <figure>
              <img className="shoes-detail__img" src={image} alt="" />
            </figure>
          </div>
          <div className="section-B">
            <h2 className="shoes-detail__heading">{name}</h2>
            <p className="show-detail__price">{price}$</p>
            <p className="show-detail__desc">{description}</p>
            <button
              className="btn btn-primary"
              style={{
                background: "#1677ff",
                color: "white",
                marginTop: "16px",
                marginBottom: "8px",
                width: "100%",
                fontSize: "16px",
              }}>
              Buy now
            </button>
            <button
              className="btn btn-primary"
              style={{
                marginBottom: "16px",
                width: "100%",
                fontSize: "16px",
                color: "black",
                border: "none",
                background: "#ffe001",
              }}
              onClick={() => {
                this.props.handleAddShoes(this.props.shoesDetail);
              }}>
              Add to cart
            </button>
          </div>
        </div>
      </Modal>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    modalStatus: state.isModalOpen,
    shoesDetail: state.shoesDetail,
  };
};
let mapDispatchToProps = (dispatch) => {
  return {
    handleAddShoes: (payload) => {
      dispatch(addShoesToCart(payload));
    },
    handleCloseShoesDetail: () => {
      dispatch(closeShoesDetail());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoesDetail);
