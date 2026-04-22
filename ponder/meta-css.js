
// variables vs constants
// a lot of people put constants in all caps

const PI = 3.14; //cant be changed

//variables are declared through "let", but we don't need "let" a second time after this.
let radius = 3;
let area = radius * radius * PI;

console.log(area) //shows up in console tab of dev tools (ctrl+shift+i)
// it says we get area from line 13 /\

radius = 2
area = radius * radius * PI;
console.log(area)


// type coersion

const one = 1;
const two = '2'; //this is a string not an int

let result = one * two; //the javascript is flexible, it changes the string to do the math for me.
console.log(result);

result = one + two; //the javascript for plus is for strings AND iints, so since there's one string, they turn theinto a string and addes them.
console.log(result);

result = one + Number(two); //view the string as a number
console.log(result);


// Scope

let course = "CSE131"; // global scope
if (true) {
    let student = "john"
    console.log(course) // yup global
    console.log(student) // local variable
}

