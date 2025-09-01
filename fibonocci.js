function fibonacci(n) {
  let a = 0,
    b = 1;
  let series = "";

  for (let i = 0; i < n; i++) {
    series += a + " ";
    [a, b] = [b, a + b]; // swap logic
  }

  console.log(series.trim());
}

fibonacci(10);
// Output: 0 1 1 2 3 5 8 13 21 34
