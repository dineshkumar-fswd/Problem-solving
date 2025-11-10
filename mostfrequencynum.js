let arr = [4, 2, 4, 3, 4, 3, 5, 1, 6];

// Step 1: Count frequency of each number
let freq = {};
for (let num of arr) {
  freq[num] = (freq[num] || 0) + 1;
}
console.log(freq);
// Step 2: Sort based on frequency (high → low)
arr.sort((a, b) => {
  if (freq[b] === freq[a]) {
    return arr.indexOf(a) - arr.indexOf(b); // keep original order
  }
  return freq[b] - freq[a];
});

console.log(arr); // Output: [4, 4, 4, 3, 3, 2, 5, 1, 6]
