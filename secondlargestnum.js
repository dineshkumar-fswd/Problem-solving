let a = [1, 2, 3, 4, 5];
let b = [1, 2, 4, 5, 6];

// Sort in descending order
let sorted = a.sort((x, y) => y - x);

let secondLargest = sorted.at(1);
console.log("Second Largest:", secondLargest);
console.log(sorted);
console.log(b.at(-1));
