//VARIABLES
var x = 15;
{
    let x = 5;  
    const y = 20;
    // y = 6;  //gives an error as we can not modify const  type variable
    console.log(x);
    console.log(y);
}
console.log(x);


//FUNCTIONS
//In normal functiion this keyword refers to the object inside which the fun 
var b = function (x, y) {
    return x+y;
};
console.log(b (5, 6));

//In arrow function this keyword present inside the global scope
//These are not hoisted 
const a = (x, y) => x+y;
console.log(a (5, 6));


//spread operator (...) - expands any iterable or rarray type data structure into its elements
const q1 = ["Jan", "Feb", "Mar", "Apr"];
const q2= ["May", "Jun", "July", "Aug"];
const q3 = ["Sep", "Oct", "Nov", "Dec"];
const year = [...q1, ...q2, ...q3]; 
console.log(year);

const numbers = [15, 20, 25, 30, -1, -34];
let maxValue = Math.max(...numbers);
console.log(maxValue);


//FOR LOOP
const num = [15, 20, 25, 30, -1, -34];
let sum = 0;
for ( let n of num){
    sum = sum + n;
}
console.log(sum);    

const name = "RashiSingh"
let text = "";
for (let ch of name){
    text += ch + " ";
}
console.log(text);


//Js Map
const fruits = new Map([
    ["apples", 500], 
    ["oranges", 300],
    ["bananans", 200]
]);
console.log(fruits);
console.log(fruits.get("oranges"));


// SET
const letters = new Set();

letters.add("a");
letters.add("b");
letters.add("c");
console.log(letters);


//CLASSES - its not an object its an template for js objects
class Car{
    constructor(name, mfgYear){
        this.name = name;
        this.mfgYear = mfgYear;
    }
}
const car1 = new Car("Mercedes" , 2022);
const car2 = new Car("Porsche" , 2020);
console.log(car1);
console.log(car2);


//Asynchronus tags - js prompts is js object that links the producing code with consuming code. producing code is actually the code that is triggereed and consuming code is triggered by some function.
//Promises are call back functions
const myFunction = () =>{
    return new Promise ((resolve, reject) => {
        setTimeout(() =>{
            console.log("This is inside promise");
            resolve();
        }, 2000);
    });
};
myFunction()
.then(()=> {
    console.log("Resolved");
}).catch(() =>{
    console.error("Rejected");
});


//Symbol type is primitive data type that represents a hidden identifier that no other third party can access. 
const person ={
    firstName: "John",
    lastName:"Doe",
    age:30, 
};
let id = Symbol("id");
person[id] = 10001;
console.log(person);

const add= (a, b) => a+b;
console.log(add(10, 11));
const add1= (a, b = 10) => a+b;
console.log(add(10));
const add2= (a, b) => a+b;
console.log(add(10));

const addNum = (...args) => {
    console.log(args);
}
console.log(addNum(10, 20, 30, 40));


const addNumbers = (...args) => {
    let sum = 0;
    for(let arg of args){
        sum += arg;
    }
    return sum;
};
console.log(addNumbers(10, 14, 16, 18, 20, 40));
