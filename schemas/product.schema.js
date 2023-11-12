const Joi = require("joi");

const id = Joi.string().regex(
  /^[0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12}$/,
);
const name = Joi.string().min(3).max(15);
const price = Joi.number().integer().min(10);
const image = Joi.string().uri();

const createproductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required(),
});

const updateproductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
});

const getproductSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createproductSchema,
  updateproductSchema,
  getproductSchema,
};
