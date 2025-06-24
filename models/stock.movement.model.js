import mongoose from "mongoose";

const StockMovementSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Product",
      required: true,
      index: true,
    },

    sellerId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    warehouseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Warehouse",
      required: true,
    },

    movementType: {
      type: String,
      enum: [
        "purchase_in",
        "sale_out",
        "return_in",
        "adjustment_in",
        "adjustment_out",
        "transfer_in",
        "transfer_out",
      ],
      required: true,
      index: true,
    },

    quantity: {
      type: Number,
      required: true,
    },

    performedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

export default mongoose.model("StockMovement", StockMovementSchema);
