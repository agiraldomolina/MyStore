const express = require("express");
const { faker } = require("@faker-js/faker");

const router = express.Router();

router.get("/", (req, res) => {
  const users = [];
  const { size } = req.query;
  const limit = parseInt(size, 10) || 100;
  for (let i = 0; i < limit; i++) {
    users.push({
      username: faker.internet.userName(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
      password: faker.internet.password(),
      birthdate: faker.date.birthdate(),
    });
  }
  res.json(users);
});

router.get("/filter", (req, res) => {
  res.send("<h1>Soy un Filter</h1>");
});

router.get("/:id", (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: `Product ${id}`,
    price: 1000,
  });
});

module.exports = router;
