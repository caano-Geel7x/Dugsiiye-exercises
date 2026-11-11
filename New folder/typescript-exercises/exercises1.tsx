let productName: string = "Notebook";
let price: number = 12.99;
let discountAvailable: boolean = true;

function getDiscount(price: number, discount: number): number {
  return price - price * discount;
}

function printLength(value: unknown): void {
  if (typeof value === "string") {
    console.log(value.length);
    return;
  }

  console.log("Input must be a string.");
}

console.log(getDiscount(price, 0.1));
printLength("Hello");
printLength(123);