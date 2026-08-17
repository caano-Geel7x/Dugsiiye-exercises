let car = {
    make:"toyota", 
    model:"camry",
    year: "1982",
  start:function() {
    console.log("the car "+this.model + " has started");
    
  } 
}

console.log(car.make);
console.log(car.model);
console.log(car.year);
car.start();

