import cartsModel from "../models/carts.model.js";

export default class Cart {
  // Métodos de la clase
  getAll = async () => {
    let result = await cartsModel.find().lean();
    return result;
  };

  getOne = async (id) => {
    let result = await cartsModel.findById(id).lean();
    return result;
  };

  saveCart = async (cart) => {
    let result = await cartsModel.create(cart);
    return result;
  };

  /* updateCart = async (cid, pid, quantity) => {
    try {
      const result = await cartsModel.findByIdAndUpdate(cid, {
        products: [{ prodId: pid, quantity: quantity }],
      });
      return result;
    } catch (err) {
      console.error(err);
      throw new Error("Error al actualizar el carrito");
    }
  }; */
}
