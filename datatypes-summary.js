//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

//console.log(id);
//console.log(anotherId);
// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(myFunction);

//console.log(typeof anotherId);

// https://262.ecma-international.org/5.1/#sec-11.4.3



let myName  ="anupama";
let OtherName =myName;
//console.log(OtherName);
OtherName="Anupama Maduriya";
//console.log(OtherName);
//console.log(myName);




let User1 ={
             name:"anupama",
             email:"anu@gmail.com"

            }

let User2 =User1;

//console.log(User2);

User2.email="anupama@gmail.com"


//console.log(User2);

//console.log(User1);

let array1=[2,3,4];

console.log(array1);

let array2=array1;

console.log(array2);

array2[1] =["a","b"];

console.log(array2);
console.log(array1);

