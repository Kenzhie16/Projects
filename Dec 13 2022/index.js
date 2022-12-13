// Objects
// an entity with properties and behavior (method)

// Object literal
// key-value pair
// propertyL value,
const person = {

    firstName: "Kenn", 
    lastName:  "Roque",
    age:       25,
    gender:    "Male"
}
// console.log(person["firstName"]);
// dot notation
// ojbect.propertyName
console.log(person.firstName);

console.log( `${person.firstName} ${person.lastName}`);

person.isAdmin = true;
console.log(person);


// object instance
const person2 = new Object();
// const person2= {};
person2.firstName = "Kael";
person2.lastName = "The Invoker"
person2.isAdmin = true

delete person2.isAdmin;

// console.log(person2);

// Object constructor
// PascalCase
// function declaration
function Car( color, brand, model, year, sound ){
    // this - refers to current object
    this.color = color;
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.start = function() {
        console.log(sound);
    }

}

const vios = new Car( "black", "Toyota", "Vios", "2019", "Broom Broom" );
console.log( vios.color );
vios.start();

const mirage = new Car( "red", "Mitsubishi", "Mirage", "2021", "Beep Beep" );
mirage.start();

//
const student = {
    firstName: "Kenn",
    middleName: "Roque",
    lastName: "Elaco",
    grade: 1.0,
    hobby: ["reading", "sleeping", "coding"],
    name: {
        fName: "Kenn",
        lName: "Elaco"
    }
}

console.log( student.name.fName , student.name.lName );
// console.log(student.hobby[0])

// for...of
// element of array
for(hobby of student.hobby) {
    // do something..
    console.log(hobby);
}

// for...in
for( property in student ) {
    console.log( `${property}: ${student[property]}` );
}

//  for...in w/ arrray
// index in array
for(key in student.hobby){
    console.log(key);
}