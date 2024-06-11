// class method
class Vehicle{
    constructor(name, maker, engine){
        this.name = name;
        this.maker = maker;
        this.engine = engine;
    }
    getDetails(){
        return `the name of the vehicle is ${this.name}`;
    }
}
let v1 = new Vehicle("Creta", "Hyundai", "2500cc");
let v2 = new Vehicle("Thar", "Mahindra", "3500cc");

console.log(v1.name);
console.log(v2.maker);
console.log(v2.getDetails());
console.log(v1.getDetails());

// consturctor method
function Vehicle1(name, maker, engine){
    this.name = name;
    this.maker = maker;
    this.engine = engine;

}
Vehicle1.prototype.getDetails = function(){
    return `The name of the vehicle is ${this.name}`;
};
let v3 = new Vehicle1("Creta", "Hyundai", "2500cc");
let v4 = new Vehicle1("Thar", "Mahindra", "3500cc");

console.log(v3.name);
console.log(v4.maker);
console.log(v4.getDetails());
console.log(v3.getDetails());

