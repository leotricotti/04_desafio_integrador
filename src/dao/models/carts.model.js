import mongoose from "mongoose";

//
const cartstsCollection = "carts";

const cartsSchema = mongoose.Schema({
  products: [{ prodId: String, quantity: Number }],
});

const cartsModel = mongoose.model(cartstsCollection, cartsSchema);

export default cartsModel;
