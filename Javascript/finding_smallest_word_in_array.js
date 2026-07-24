// INTERMEDIATE
sentence = ["dinesh", "kumar", "senthil", "bad", "good"];
small = sentence[0].length;
smallword = 0;
for (let b of sentence) {
  if (b.length < small) {
    small = b.length;
    smallword = b;
  }
}
console.log(smallword);

// FRESHER
sentence = ["dinesh", "kumar", "senthil", "bad", "good"];
word_length = [];
for (let a of sentence) {
  word_length.push(a.length);
}
console.log("original array:", sentence);
console.log("words length:", word_length);
small = word_length[0];
for (let b of word_length) {
  if (b < small) {
    small = b;
  }
}
console.log(small);
find_index = word_length.indexOf(small);
console.log(sentence.at(find_index));
