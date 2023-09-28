import {
  Add_Shoe_To_Cart,
  Remove_Shoes_From_Cart,
  Calculate_Price,
  View_Shoes_Detail,
  Increase_Amount,
  Decrease_Amount,
  Close_Shoes_Detail,
} from "./constants";

export const addShoesToCart = (payload) => ({
  type: Add_Shoe_To_Cart,
  payload,
});
export const calculateProductsPrice = (payload) => ({
  type: Calculate_Price,
  payload,
});

export const decreaseProductAmount = (payload) => ({
  type: Decrease_Amount,
  payload,
});
export const increaseProductAmount = (payload) => ({
  type: Increase_Amount,
  payload,
});
export const removeProductFromCart = (payload) => ({
  type: Remove_Shoes_From_Cart,
  payload,
});
export const viewShoesDetail = (payload) => ({
  type: View_Shoes_Detail,
  payload,
});
export const closeShoesDetail = (payload) => ({
  type: Close_Shoes_Detail,
  payload,
});
