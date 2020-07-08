const add = (a, b) => {
  return a + b;
};

console.log(add(3, 4));

const user = {
  name: "Rivky",
  cities: ["toronto", "lakewood", "monsey"],
  printPlacesLived() {
    const newCities = this.cities.map((city) => {
      return this.name + " has lived in " + city;
    });
    return newCities;
  },
};

console.log(user.printPlacesLived());

const multiplier = {
  numbers: [3, 6, 7, 5],
  multiplyBy: 2,
  multiply() {
    const multipliedNumbers = this.numbers.map((number) => {
      return this.multiplyBy * number;
    });
    return multipliedNumbers;
  },
};

console.log(multiplier.multiply());
