let a = "madam";
let b = [...a].reverse().join("");
if (a == b) {
  console.log(a, "is Palindrome");
} else {
  console.log(a, "is Not palindrome");
}
