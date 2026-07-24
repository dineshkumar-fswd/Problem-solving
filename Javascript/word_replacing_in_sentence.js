let sentence = prompt("Enter the sentence:");
let word_to_replace = prompt("Enter word to replacing:");
let replacing_word = prompt("Enter new word to replace:");

let new_sen = "";
for (let a of sentence.split(" ")) {
  if (a === word_to_replace) {
    new_sen = sentence.replace(a, replacing_word);
  }
}
console.log(new_sen);
