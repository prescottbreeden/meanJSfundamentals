const stars = "*"
function starString(num) {
    result = stars.repeat(num)
    return result;
}

function drawStars(arr) {
    arr.forEach(idx => {
        if(typeof idx == "number") {
            console.log(stars.repeat(idx))
        }
        if(typeof idx == "string") {
            let first_letter = idx[0].toLowerCase();
            console.log(first_letter.repeat(idx.length))
        }
    })
}

let test1 = starString(8)
// console.log(test1);

let x = drawStars([4, 6, 1, 3, 5, 7, 25]);
let y = drawStars([4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]);