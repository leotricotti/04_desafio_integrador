import cartProductModel from "../models/cartProduct.model";

export default class CartProduct {
  saveCartProduct = async (cartProduct) => {
    const result = await cartProductModel.create(cartProduct);
    return result;
  };

  updateCartProduct = async (id, quantity) => {
    const result = await cartProductModel.findByIdAndUpdate(id, {
      quantity: quantity,
    });
    return result;
  };
}
