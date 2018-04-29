/*

:...............................:
:                               :
:        Basic JS notes         :
:                               :
:...............................:

*/

// Passed by reference
console.log("..........................")
console.log("passing value by reference")

var x = [1,2,3];
var y = x;
x.push('Hello world!')
console.log(x); // [1,2,3,'Hello world!']
console.log(y); // [1,2,3,'Hello world!']

// var - let - const
// var = scope to function
// let = scope to block
// const = constant

// const can be block scoped
console.log(".......................")
console.log("block scoping with const")

const my_num = 1;
console.log(my_num);

if (my_num === 1) {
    let my_num = 2
    console.log(my_num);
}
console.log(my_num);

// const can be used for object
console.log(".......................")
console.log("using const with object")

const my_object = {'key': 'value'};
console.log(my_object);

my_object.key = 'keys_are_not_protected';
console.log(my_object);

// make object immutable
// my_object.freeze()

// const with arrays
console.log(".......................")
console.log("using const with arrays")

const my_array = ['a', 'b'];
console.log(my_array);

// can add to a const array but you cannot rewrite it
my_array.push('c');
console.log(my_array);

//---------------------------//
//---- Temporal Deadzone ----//
//---------------------------//
console.log(".................")
console.log("temporal deadzone")


function do_something() {
    console.log(bar); // undefined  <~~~ temporal deadzone
    // console.log(foo); // ReferenceError
    var bar = 1;
    // let foo = 2;
}
do_something();

// case blocks for let
console.log("...................")
console.log("case blocks for let")

let xx = 1;
switch(xx) {
    case 0: {
        let foo; 
        console.log(foo);
        console.log(xx);
        break;
    }
    case 1: {
        let foo;
        console.log(foo);
        console.log(xx);
        break;
    }
}

// scoping let within an if-block
console.log("......................")
console.log("if-block scoping w/let")

var a = 1;
var b = 2;
 if (a === 1) {
     var a = 11;
     let b = 22;

     console.log(a);
     console.log(b);
 }
console.log(a);
console.log(b);

// the Math object
function mathObject() {

    console.log(".................")
    console.log("the MATH object")
    
    let x = Math.floor(Math.random() * 20);
    console.log(x);
    // => logs random number between 0 and 19
    
    let y = Math.floor(Math.random() * 21);
    console.log(y);
    // => lgos a random number beteween 0 and 20
    
    let z = Math.floor(Math.random() * 20) + 1;
    console.log(z);
    // => logs a random number between 1 and 20
}
mathObject();

// who cares...
function modulus(){
    let x = 11;
    let y = 5;
    let z = x % y;
    console.log(z);
    // => 1
}

// using unicode characters
console.log("......................")
console.log("some unicode examples")
console.log('\u263A        \u2603        \u272f');

console.log("......................")
console.log("javascript array stuff")
let crazyArray = [];
crazyArray[334] = "Hello World!";
console.log(crazyArray);

// let with for loop and use of const scoping
function printCrazyArray(){
    console.log("...................................")
    console.log("let with for loop and const scoping")
    for (let i = 0; i < crazyArray.length; i++) {
        const element = crazyArray[i];
        console.log(element);
    }
}
// printCrazyArray()

// do/while loops
function doWhile(){
    console.log("......................")
    console.log("do-while loop example")
    let num = 0;
    do {
        console.log(`I'm counting! the numbner is ${num}`);
        num++;
    }
    while (num < 6);
    console.log("We are done. Goodbye world!");
}
doWhile();


// arrow functions
let sayName4 = (name) => { console.log("Hello my name is " + name) };
console.log("......................")
console.log("arrow function example")
var funny = sayName4("Dolores");
console.log(funny + " ... wonder why I can't capture the ouput of this function")




