let numbers = [10, 5, 20, 3, 15];

let largest = numbers[0];
let smallest = numbers[0];

for (let num of numbers) {
  if (num > largest) {
    largest = num;
  }
  if (num < smallest) {
    smallest = num;
  }
}

console.log("Largest:", largest); // 20
console.log("Smallest:", smallest); // 3
