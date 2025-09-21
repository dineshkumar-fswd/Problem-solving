let arr = [4, 6, 2, 6, 4, 4, 7];

// Step 1: Count frequency
let freq = [];
for (let i = 0; i < arr.length; i++) {
  let num = arr[i];
  if (freq[num] === undefined) {
    freq[num] = 1;
  } else {
    freq[num]++;
  }
}

// Step 2: Put into new array based on frequency (highest first)
let result = [];

// 4 appears 3 times
for (let i = 0; i < freq[4]; i++) {
  result.push(4);
}

// 6 appears 2 times
for (let i = 0; i < freq[6]; i++) {
  result.push(6);
}

// 2 appears 1 time
for (let i = 0; i < freq[2]; i++) {
  result.push(2);
}

// 7 appears 1 time
for (let i = 0; i < freq[7]; i++) {
  result.push(7);
}

console.log(result); // [4,4,4,6,6,2,7]
