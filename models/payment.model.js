import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: true,
    },

    payerId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    payerType: {
      type: String,
      enum: ["User", "Seller", "Supplier", "Admin"],
      required: true,
    },

    payeeId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    payeeType: {
      type: String,
      enum: ["User", "Seller", "Supplier", "Admin"],
      required: true,
    },

    paymentMethod: {
      type: String,
      enum: [
        "cash",
        "bank_transfer",
        "credit_card",
        "wallet",
        "cheque",
        "other",
      ],
      required: true,
    },

    paymentDate: {
      type: Date,
      default: Date.now,
    },

    status: {
      type: String,
      enum: ["pending", "completed", "failed", "refunded"],
      default: "pending",
    },
  },
  { timestamps: true }
);

export default mongoose.model("Payment", PaymentSchema);
