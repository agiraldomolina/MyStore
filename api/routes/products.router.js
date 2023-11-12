const express = require("express");
const ProductServices = require("../services/product.service");
const validatorHandler = require("../middlewares/validator.handler");
const {
  createproductSchema,
  updateproductSchema,
  getproductSchema,
} = require("../schemas/product.schema");

const router = express.Router();

const service = new ProductServices();

router.get("/", async (req, res) => {
  const products = await service.find();
  res.json(products);
});

router.post(
  "/",
  validatorHandler(createproductSchema, "body"),
  async (req, res) => {
    const body = req.body;
    const newProduct = await service.create(body);
    res.status(201).json(newProduct);
  },
);

router.patch(
  "/:id",
  validatorHandler(getproductSchema, "params"),
  validatorHandler(updateproductSchema, "body"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const product = await service.update(id, body);
      res.json(product);
    } catch (error) {
      next(error);
    }
  },
);

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const rst = await service.delete(id);
    res.json(rst);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:id",
  validatorHandler(getproductSchema, "params"),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      next(error);
    }
  },
);

router.get("/filter", (req, res) => {
  res.send("<h1>Soy un Filter</h1>");
});

module.exports = router;
