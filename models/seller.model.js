import mongoose from "mongoose";
import { ProductSchema } from "./product.model";

const SellerSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    products: [
      {
        type: ProductSchema,
      },
    ],
  },
  { timestamps: true }
);
