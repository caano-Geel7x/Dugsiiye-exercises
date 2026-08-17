
const product = {
  name: "mouse",
  price: 25.99,
  inStock: true,
  tags: ["electronics", "accessories"]
};
const jsonString = JSON.stringify(product);
console.log(jsonString);

const parsedProduct = JSON.parse(jsonString);

console.log(parsedProduct);
