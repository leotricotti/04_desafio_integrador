import { Router } from "express";
import cartsModel from "../dao/models/carts.model.js";
import CartProduct from "../dao/dbManager/cartProduct.manager.js";

const router = Router();
const cartProductManager = new CartProduct();

router.post("/", async (req, res) => {
  const { id, quantity } = req.body;
  let newCartProduct = {
    id: id,
    quantity: quantity,
  };
  try {
    const cart = await cartProductManager.saveCartProduct(newCartProduct);
    res.json({ message: "Producto agregado con éxito", data: cart });
  } catch (err) {
    res.status(500).json({
      message: "Error al agregar el producto al carrito",
      data: err,
    });
  }
});

export default router;
