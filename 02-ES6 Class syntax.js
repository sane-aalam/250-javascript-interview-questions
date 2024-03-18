// ES6 Class syntax

class Car {
  constructor(name, year) {
    this.name = name;
    this.year = year;
  }
}

const newCar1 = new Car("HondaCity", 2023);
const newCar2 = new Car("TataCar", 2021);

console.log(newCar1.name);
