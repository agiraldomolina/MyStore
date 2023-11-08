const express = require("express");
const { faker } = require("@faker-js/faker");

const router = express.Router();

router.get("/", (req, res) => {
  const products = [];
  const { size } = req.query;
  const limit = parseInt(size, 10) || 100;
  for (let i = 0; i < limit; i++) {
    products.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.number.int(), 10),
      Image: faker.image.url(),
    });
  }
  res.json(products);
});

router.post("/", (req, res) => {
  const body = req.body;
  res.json({
    message: "created successfully",
    data: body,
  });
});

router.patch("/:id", (req, res) => {
  const { id } = req.params;
  const body = req.body;
  res.json({
    message: "updated successfully",
    data: body,
    id,
  });
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    message: "Product deleted successfully",
    id,
  });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  if (id === "999") {
    res.status(404).json({
      message: "Product not found",
    });
  } else {
    res.status(200).json({
      id,
      name: `Product ${id}`,
      price: 1000,
    });
  }
});

router.get("/filter", (req, res) => {
  res.send("<h1>Soy un Filter</h1>");
});

module.exports = router;
