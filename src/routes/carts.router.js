import { Router } from "express";
import Cart from "../dao/dbManager/carts.manager.js";
import Product from "../dao/dbManager/products.manager.js";

// Inicializamos el enrutador
const router = Router();
// Inicializamos el manejador de carritos
const cartsManager = new Cart();
// Inicializamos el manejador de productos
const productsManager = new Product();

// Método asyncrono para obtener un carrito por ID
router.get("/", async (req, res) => {
  try {
    const carts = await cartsManager.getAll();
    res.json({ message: "success", cart: carts });
  } catch (err) {
    res.status(500).json({
      message: "Error al obtener los carritos",
      data: err,
    });
  }
});

router.get("/:cid", async (req, res) => {
  const { cid } = req.params;
  try {
    const cart = await cartsManager.getOne(cid);
    const data = cart.products;
    if (cart) {
      res.render("carts", { cart: data });
    } else {
      res.status(404).json({
        message: "Carrito no encontrado",
      });
    }
  } catch (err) {
    res.status(500).json({
      message: "Error al obtener el carrito",
      data: err,
    });
  }
});

//Metodo asyncrono para guardar un carrito
router.post("/", async (req, res) => {
  let newCart = {
    products: [],
  };
  try {
    const result = await cartsManager.saveCart(newCart);
    res.json({ message: "Carrito creado con éxito", data: newCart });
  } catch (err) {
    res.status(500).json({ message: "Error al crear el carrito ", data: err });
  }
});

//Método asyncrono para agregar productos al carrito
router.post("/:cid/product/:pid", async (req, res) => {
  const { cid, pid } = req.params;
  try {
    const cart = await cartsManager.getOne(cid);

    cart.products.push({ product: pid });

    const result = await cartsManager.updateCart(cid, cart);

    const updatedCart = await cartsManager.getOne(cid);
    console.log(updatedCart);

    res.json({ message: "Carrito actualizado con éxito", data: updatedCart });
  } catch (err) {
    res.status(500).json({
      message: "Error al actualizar el carrito",
      data: err,
    });
  }
});

export default router;
