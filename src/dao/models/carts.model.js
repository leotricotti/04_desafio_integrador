import mongoose from "mongoose";

//
const cartstsCollection = "carts";

const cartsSchema = mongoose.Schema({
  products: {
    type: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
        },
      },
    ],
    default: [],
  },
});

const cartsModel = mongoose.model(cartstsCollection, cartsSchema);

export default cartsModel;
