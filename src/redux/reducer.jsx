import {
  Add_Shoe_To_Cart,
  Remove_Shoes_From_Cart,
  Calculate_Price,
  View_Shoes_Detail,
  Decrease_Amount,
  Increase_Amount,
  Close_Shoes_Detail,
} from "./constants";
import data from "./database";

const initialState = {
  shoesList: data,
  shoesDetail: data[0],
  cart: [],
  isModalOpen: false,
  subTotal: 0,
  tax: 0,
  total: 0,
};

const calcSubtotal = (list) => {
  return list.reduce((acc, item) => {
    return acc + item.price * item.amount;
  }, 0);
};

const reducer = (state = initialState, action) => {
  let list;
  let newProduct;
  let productID;
  let productIndex;

  switch (action.type) {
    case Add_Shoe_To_Cart:
      list = [...state.cart];
      productIndex = list.findIndex((item) => item.id === action.payload.id);

      if (productIndex === -1) {
        newProduct = { ...action.payload, amount: 1 };
        list.push(newProduct);
        return { ...state, cart: list };
      }

      let oldProduct = list[productIndex];
      newProduct = { ...oldProduct, amount: ++oldProduct.amount };
      list.splice(productIndex, 1, newProduct);

      return { ...state, cart: list };

    case Calculate_Price:
      const subTotal = calcSubtotal(state.cart);
      const tax = subTotal * 0.1 || 0;
      const total = subTotal + tax;
      return {
        ...state,
        subTotal,
        tax,
        total,
      };

    case Decrease_Amount:
      let targetIndex;
      list = state.cart.map((item, index) => {
        if (item.id === action.payload.id) {
          if (item.mount - 1 === 0) {
            targetIndex = index;
            return null;
          }
          return {
            ...item,
            amount: item.amount - 1,
          };
        }
        return item;
      });

      list.splice(targetIndex, 1);

      return {
        ...state,
        cart: list,
      };

    case Increase_Amount:
      return {
        ...state,
        cart: state.cart.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              amount: item.amount + 1,
            };
          }
          return item;
        }),
      };

    case Remove_Shoes_From_Cart:
      list = [...state.cart];
      productID = action.payload.id;
      productIndex = list.findIndex((item) => item.id === productID);
      list.splice(productIndex, 1);
      return { ...state, cart: list };

    case View_Shoes_Detail:
      return { ...state, shoesDetail: action.payload, isModalOpen: true };

    case Close_Shoes_Detail:
      return { ...state, isModalOpen: false };

    default:
      return state;
  }
};

export { reducer, initialState };
