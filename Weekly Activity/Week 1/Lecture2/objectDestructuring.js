let details = {
  name: "John",
  age: 20,
  address: {
    street: "123 Main St",
    city: "New York",
    country: "USA",
    zipCode: 10001,
    passportDetails: {
      number: 1234567890,
      expirationDate: "12/2022",
      country: "USA",
    },
  },
};
let name = details.name;
let age = details.age;
console.log(name, age);

//object Mapping
let obj1 = { name: "Rashi", age: 24 };
let obj2 = { name: "Rashi" };
function areEqual(obj1, obje2) {
  if (obj1 === obj2) {
    return true;
  }
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let key of Object.keys(obj1)) {
    if (typeof obj2[key] === "undefined") {
      return false;
    }
    if (obj2[key] !== obj1[key]) {
      return false;
    }
  }
  return true;
}
console.log(areEqual(obj1, obj2));
