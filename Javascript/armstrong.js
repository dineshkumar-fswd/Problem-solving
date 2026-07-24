// function to check Armstrong number
function isArmstrong(num) {
  // convert number to string and split into digits
  let digits = num.toString().split("");

  // count how many digits
  let power = digits.length;

  // variable to store sum of powers
  let sum = 0;

  // loop through each digit
  for (let d of digits) {
    sum += d ** power; // add digit^power to sums
  }

  if (sum === num) {
    console.log(num + " is an Armstrong number");
  } else {
    console.log(num + " is not an Armstrong number");
  }
}

// test the function
isArmstrong(153); // Armstrong
isArmstrong(123); // Not Armstrong
