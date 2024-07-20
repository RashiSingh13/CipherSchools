// let myPromise = new Promise((resolve, reject) => {
//   let num1 = 10;
//   let num2 = 15;
//   let sum = num1 + num2;

//   if (sum > 24) {
//     resolve();
//   } else {
//     reject();
//   }
// });

function addTwoNumbers(num1, num2) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Inaide setTime out");
      resolve(num1 + num2);
    }, 2000);
    reject(new Error("An error occured!!"));
  });
}
addTwoNumbers(10, 15)
  .then(() => {
    console.log("The sum is greater than 24");
  })
  .catch(() => {
    console.log("The sum is less than or equal to 24");
  });

// function addTwoNumbers(num1, num2) {
//   let sum = 0;
//   setTimeout(() => {
//     console.log(num1 + num2);
//     sum = num1 + num2;
//   }, 2000);
//   console.log("Inside addTwoNumbers");
//   return sum;
// }
// console.log(addTwoNumbers(2, 3));
