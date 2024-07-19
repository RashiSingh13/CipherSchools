let array = [5, 10, 15, 20];
let newArray = [];

for (let i = 0; i < array.length; i++) {
  newArray[i] = array[i] * array[i];
}
console.log(newArray);

//.map()
function funForMap(element) {
  return element * element;
}
let newArray1 = array.map(funForMap);
console.log(newArray1);

let newArray2 = array.map((element, index) => {
  console.log(index);
  return element * element;
});
console.log(newArray2);

//.forEach()
let array1 = [1, 2, 3, 4, 5];
array1.forEach((element, index) => {
  element *= element;
  console.log(element);
});
console.log("Array is: ", array1);

//.filter()
let array2 = [10, 20, 30, 40, 50];
let newArray3 = array2.filter((element) => element >= 30);
console.log(newArray3);

//.find()
let temp = array2.find((value) => {
  return value > 20;
});
console.log(temp);

//.sort()
let array3 = [30, 34, 23, "40", 12, 53, 56, 21, 111]; //js reads every element as string
let sortedArray = array3.sort();
console.log(sortedArray); //to get rid from it...
let sortedArray1 = array3.sort((a, b) => {
  a = Number(a);
  b = Number(b);
  return a - b;
});
console.log(sortedArray1);
