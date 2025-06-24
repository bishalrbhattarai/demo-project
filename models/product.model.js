import mongoose from "mongoose";

export const ProductSchema = new mongoose.Schema(
  {
    sku: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    categoryPath: [
      {
        _id: { type: mongoose.Schema.Types.ObjectId, required: true },
        name: { type: String, required: true },
      },
    ],
    categoryId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      index: true,
    },

    minStockLevel: { type: Number, default: 0 },
    stockLevel: { type: Number, default: 0 },

    brandName: { type: String, required: true },
    brandId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      index: true,
    },

    status: {
      type: String,
      enum: ["active", "inactive", "draft"],
      default: "active",
    },

    pricing: {
      basePrice: { type: Number, required: true },
      discountAmount: { type: Number, default: 0 },
    },
    images: [
      {
        url: { type: String, required: true },
        altText: { type: String, default: "Image Not Available" },
      },
    ],
    attributes: { type: mongoose.Schema.Types.Mixed, default: {} },

    seller: {
      name: { type: String, required: true },
      id: { type: mongoose.Schema.Types.ObjectId, required: true },
    },

    totalReviews: {
      type: Number,
      default: 0,
      index: true,
    },
    avgReview: {
      type: Number,
      default: 0,
      index: true,
    },

    recentReviews: [
      {
        reviewerName: { type: String, required: true },
        content: { type: String, required: true },
        rating: { type: Number, required: true },
        reviewedAt: { type: Date, required: true },
      },
    ], // only for recent N reviews
  },
  { timestamps: true }
);

ProductSchema.index({ "seller.id": 1, categoryId: 1, status: 1 });

ProductSchema.index({ name: "text", description: "text" });
