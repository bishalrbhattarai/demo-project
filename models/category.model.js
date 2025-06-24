import mongoose from "mongoose";

const CategorySchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    slug: { type: String, required: true, unique: true },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      default: null,
    },
    path: [{ type: String }],
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "active",
    },
    description: { type: String },
  },
  { timestamps: true }
);

CategorySchema.index({ path: 1 });
CategorySchema.index({ slug: 1 });

export default mongoose.model("Category", CategorySchema);
