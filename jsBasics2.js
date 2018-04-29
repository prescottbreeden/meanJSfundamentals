function magic_multiply(x, y){
    if(Array.isArray(x)) {
        for(let i = 0; i < x.length; i++){
            x[i] = x[i]*y
        }
    }
    else if(typeof y === "string") {
        x = "Error: Cannot multiply by string"
    }
    else if(typeof x === "string") {
        x = x.repeat(y)
    }
    else {
        x = x*y;
    }
    if(x == 0 && y == 0) {
        x = "All inputs 0"
    }
    
    return x;
}

let test1 = magic_multiply(5,2);
console.log(test1);
// => 10

let test2 = magic_multiply(0,0);
console.log(test2);
// => "all inputs 0"

let test3 = magic_multiply([1,2,3], 2);
console.log(test3);
// => [2,4,6]

let test4 = magic_multiply(7, "three");
console.log(test4);
// => "Error: Cannot multiply by string"

let test5 = magic_multiply("Brendo", 4);
console.log(test5);
// => "BrendoBrendoBrendoBrendo"