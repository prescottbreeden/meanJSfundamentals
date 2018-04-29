function zero_negativity(arr) {
    let isTrue = true;
    arr.forEach(num => {
        if(num < 0) {
            isTrue = false;
        }
    });

    return isTrue;
}

function is_even(num) {
    return (num % 2 == 0)
}

function how_many_even(arr) {
    let counter = 0;
    arr.forEach(num => {
        if(is_even(num)) {
            counter++
        }
    })
    return counter;
}

function create_dummy_array(n) {
    let arr = []
    for(let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random()*10))
    }
    return arr;
}

function random_choice(arr) {
    let x = arr[Math.floor(Math.random()*arr.length)]
    return x;
}


let test1 = zero_negativity([1,2,3,4,5])
console.log(test1);

let test2 = zero_negativity([1,-2,3,4,5])
console.log(test2);

let test3 = is_even(1)
console.log(test3);

let test4 = is_even(2)
console.log(test4);

let test5 = how_many_even([1,2,3,4,5])
console.log(test5);

let test6 = create_dummy_array(6)
console.log(test6);

let test7 = random_choice([1,2,3,4,5])
console.log(test7);