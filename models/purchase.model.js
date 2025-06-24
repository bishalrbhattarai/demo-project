import mongoose from "mongoose";

const PurchaseSchema = new mongoose.Schema(
  {
    purchaseOrderNumber: {
      type: String,
      required: true,
      unique: true,
    },

    supplierId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Supplier",
      required: true,
      index: true,
    },

    warehouseId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Warehouse",
      required: true,
    },

    orderedBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    purchaseDate: {
      type: Date,
      default: Date.now,
    },

    expectedDeliveryDate: {
      type: Date,
    },

    receivedDate: {
      type: Date,
    },

    status: {
      type: String,
      enum: ["pending", "partially_received", "received", "canceled"],
      default: "pending",
      index: true,
    },

    items: [
      {
        productId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
        quantityOrdered: { type: Number, required: true },
        quantityReceived: { type: Number, default: 0 },
        purchasePrice: { type: Number, required: true },
        discount: { type: Number, default: 0 },
        totalPrice: { type: Number, required: true }, 
      },
    ],

    subtotal: {
      type: Number,
      required: true,
    },

    tax: {
      type: Number,
      default: 0,
    },

    shippingFee: {
      type: Number,
      default: 0,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    paymentStatus: {
      type: String,
      enum: ["unpaid", "partial", "paid"],
      default: "unpaid",
    },

    paymentMethod: {
      type: String,
      enum: ["cash", "bank_transfer", "credit", "other"],
    },

    notes: {
      type: String,
    },

    attachments: [
      {
        url: { type: String },
        fileName: { type: String },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("Purchase", PurchaseSchema);
