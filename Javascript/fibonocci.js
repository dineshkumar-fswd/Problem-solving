function fibonocci(n) {
  let a = 0;
  let b = 1;
  let series = " ";
  for (let i = 0; i < n; i++) {
    series = series + a + ",";
    [a, b] = [b, a + b];
  }
  return series;
}
console.log(fibonocci(10));
