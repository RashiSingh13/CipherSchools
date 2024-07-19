const myName = [];
console.log(myName);
myName.push("John");
console.log(myName);

let myName1 = "John";
console.log(myName1);
myName1 = "Alex";
console.log(myName1);

{
  var num = 5;
  console.log(num);
}

//String Interpolation
let firstName = "Rashi";
let lastName = "Singh";
console.log(firstName + " " + lastName);

let firstName1 = "Rashi";
let lastName1 = "Singh";
let fullName = "${firstName} ${lastName}";
console.log(fullName);
console.log(firstName1);

//Default paramas
function addTwoNumbers(num1, num2) {
  return num1 + num2;
}
console.log(addTwoNumbers(1, 2));

let addTwoNumbers1 = (num1, num2) => {
  console.log(num1);
  console.log(num2);
  return num1 + num2;
};
console.log(addTwoNumbers(1, 2));

//Rest and Spread operator are applicable in Arrays and Object in Javascript
let array = [5, 10, 15, 20, 25];
//spread -> ...   O(n)
console.log(...array);
let newArray = [100, 102, ...array, 30, 35, 40];
console.log(array);
//Rest -> ...
let maxOfTwoNumbers = (num1, num2) => Math.max(num1, num2);
let maxOfNumbers = (...numbers) => {
  console.log(numbers);
};
maxOfNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
//or

let maxOfNumbers1 = (...numbers) => {
  let maximum = Number.MIN_VALUE;
  for (let number of numbers) {
    maximum = Math.max(maximum, number);
  }
  return maximum;
};
console.log(maxOfNumbers1(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));

//For object
let object = {
  name: {
    firstName: "John",
    lastName: "Doe",
  },
  age: "24",
  city: "New York",
};
let object2 = { ...object, country: "USA", state: "California" };
object2.address.city = "Washington";
console.log(object2); //shadow clonning
console.log(object);

//Declonning of the object

let object3 = JSON.parse(JSON.stringify(object));
object3.address.city = "San Francisco";
console.log(object3);
