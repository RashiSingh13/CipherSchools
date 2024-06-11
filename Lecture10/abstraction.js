//using constructor
class Person{
    constructor(name, id)
{
    this.name = name;
    this.id = id;
}
addAddress(newAddress){
    this.address = newAddress;
}
getDetails(){
    console.log(`Name is: ${this.name}, and address is: ${this.address}`);
}
}
let person1 = new Person("Rashi", 21);
person1.addAddress("Kolkata");
person1.getDetails();


class Person_new{
constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
    let getDetails_NoAccess= function (){
        return `First name is: ${this.firstName} and last name is: ${this.lastName}`;
    }; //will give an error as scope is in the constuctor
    this.getDetails_Access = function(){
        return `First name is: ${this.firstName} and last name is: ${this.lastName}`;
    };
}
}

let person2 = new Person_new("Rashi", "Singh");
console.log(person2.firstName);
console.log(person2.getDetails_NoAccess());
console.log(person2.getDetails_Access());

