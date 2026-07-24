function factorial(num) {
  let b = 1;
  for (let i = 1; i <= num; i++) {
    b = b * i;
  }
  return b;
}

console.log(factorial(5));
