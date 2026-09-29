// EXAMPLE: MAPPING and FILTERING

let input = [0, 1, 2, 3];

// MAP
// Method 1: Loop

let outputLoop = [];

/*
Equivalent:

for (let i = 0; i < input.length; ++i) {
    let num = input[i];

    outputLoop.push(num + 10);
}
*/

for (let num of input) {
  outputLoop.push(num + 10);
}

// Method 2: Array.map
function addTen(num) {
    return num + 10;
}

let outputMap1 = input.map(addTen);

let outputMap2 = input.map(num => num + 10);

// FILTER

function isEven(num) {
    return num % 2 == 0;
}

// Method 1: Loop

let outputFilterLoop = [];

for (let num of input) {
    if (isEven(num)) {
        outputFilterLoop.push(num);
    }
}

// Method 2: Array.filter

let outputFilter = input.filter(isEven);
// Also valid: input.filter(num => isEven(num))