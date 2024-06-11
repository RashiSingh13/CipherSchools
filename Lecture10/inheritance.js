class Person{
    constructor (firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
    getDetails = function (){
        return `First name is: ${this.firstName} and last name is ${this.lastName}`;
    };
}

class Student extends Person {
    constructor(firstName, lastName, rollNumber){
        super(firstName, lastName);
        this.rollNumber = rollNumber;
    }
    getDetails = function (){
        return `First name is: ${this.firstName} and last name is ${this.lastName} and the roll number is: ${this.rollNumber}`;
    };
}
let person1 = new Person("Rashi" , "Singh");
console.log(person1.firstName);
console.log(person1.getDetails());

let student1 = new Student("Rah", "Singh", 21);
console.log(student1.getDetails());