function isPrime(n) {
  // Negative numbers, 0 and 1 are not prime
  if (n <= 1) return "Not Prime";

  // 2 is the only even prime number
  if (n === 2) return "Prime";

  // Eliminate other even numbers
  if (n % 2 === 0) return "Not Prime";

  // Check for factors from 3 up to √n, skipping even numbers
  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      // Found a factor, so not prime
      return "Not Prime";
    }
  }

  // No factors found, number is prime
  return "Prime";
}
console.log(isPrime(5));
