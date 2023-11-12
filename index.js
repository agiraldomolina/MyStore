const express = require("express");
const cors = require("cors");
const routerApi = require("./routes");

const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require("./middlewares/error.handler");

const app = express();
const port = 3000;

app.use(express.json());
const whitelist = ["https://localhost:8080"];
const corsOptions = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello my server is running");
});

routerApi(app);
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
