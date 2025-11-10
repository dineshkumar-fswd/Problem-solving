text = "a1b2c3d4";

//Create two empty strings
letters = "";
numbers = "";

//Loop through each character
for (let ch of text) {
  if (isNaN(ch)) {
    letters += ch;
  } else {
    numbers += ch;
  }
}
console.log(`Letters:${letters} \nNumbers:${numbers}`);

// WITHOUT INBUILT FUNCTIONS
let text = "a1b2c3D4";

let letters = "";
let numbers = "";

for (let ch of text) {
  let ascii = ch.charCodeAt(0); // ✅ use ch instead of text

  // Check numbers (0–9)
  if (ascii >= 48 && ascii <= 57) {
    numbers += ch; // ✅ ch itself
  }
  // Check uppercase (A–Z) and lowercase (a–z)
  else if ((ascii >= 65 && ascii <= 90) || (ascii >= 97 && ascii <= 122)) {
    letters += ch; // ✅ ch itself
  }
}

console.log("Letters:", letters);
console.log("Numbers:", numbers);
