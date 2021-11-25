const ProductController = require("../controllers/productmanager.controllers");
module.exports = function (app) {
  app.get("/api/product", ProductController.findAllProducts);
  app.get("/api/product/:id", ProductController.getProductById);
  app.put('/api/product/:id', ProductController.updateProductById);
  app.post("/api/product", ProductController.createProduct);
  app.delete("/api/product/:id", ProductController.deleteProductById);
};
