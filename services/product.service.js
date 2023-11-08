const { faker } = require("@faker-js/faker");

class ProductServices {
  constructor() {
    this.products = [];
    this.generate();
  }

  generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.products.push({
        name: faker.commerce.productName(),
        price: parseInt(faker.number.int(), 10),
        Image: faker.image.url(),
      });
    }
  }
  create() {}

  find() {
    return this.products;
  }

  findOne() {}
  delete() {}
}

module.exports = ProductServices;
