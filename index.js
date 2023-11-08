const express = require("express");
const routerApi = require("./routes");

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello my server is running");
});

app.get("/new-route", (req, res) => {
  res.send("Hi, I am a new route!");
});

app.get("/categories/:categoryId/products/:productId", (req, res) => {
  const { categoryId, productId } = req.params;
  res.json({
    categoryId,
    productId,
  });
});

routerApi(app);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
