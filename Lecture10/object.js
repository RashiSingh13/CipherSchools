let person = {
    firstName: "Rashi" , 
    lastName: "Singh" , 

    getFullName: function(){
        return `The name is ${person.firstName} ${person.lastName}`;
    },
    phoneNumber: {
        mobile: "123456",
        landline: "34567",
    },
};
console.log(person.getFullName());
console.log(person.phoneNumber.landline);


// Object constructor
function person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}
let person1 = new person("Rashi", "Singh");
let person2= new person("Rhu", "Singh");

console.log(person1.firstName);
console.log ( `${ person2.firstName} ${person2.lastName}`);


// Object.create() Method
const coder = {
    isStudying: false,
    printIntro: function(){
        console.log(`My name is ${this.name}. Am I studying?: ${this.isStudying}`);
    },
}
const me = Object.create(coder);
me.name = "Rashi singh";
me.isStudying = true;
me.printIntro();
