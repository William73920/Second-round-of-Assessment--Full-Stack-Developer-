import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    SKU: {
      type: String,
      required: true,
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: true,
      validate: {
        validator: async function (value) {
          const category = await mongoose.model("Category").findById(value);
          return !!category;
        },
        message: "Invalid category assigned to the product.",
      },
    },
    inventory_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Inventory",
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Discount",
      required: true,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const inventorySchema = new mongoose.Schema(
  {
    quantity: {
      type: Number,
      required: true,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

const Decimal128 = mongoose.Schema.Types.Decimal128;

const discountSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    discount_percent: {
      type: Decimal128,
      required: true,
    },
    active: {
      type: Boolean,
      required: true,
    },
    deletedAt: {
      type: Date,
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

export const Product = mongoose.model("Product", productSchema);
export const Category = mongoose.model("Category", categorySchema);
export const Inventory = mongoose.model("Inventory", inventorySchema);
export const Discount = mongoose.model("Discount", discountSchema);
