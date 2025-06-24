const ProductModel = {
  name: "Product",
  primaryKey: "id",
  properties: {
    id: "int",
    name: "string",
    description: "string",
    price: "float",
    category: "string",
    stockQuantity: "int",
    createdAt: "date",
    updatedAt: "date",
  },
};
