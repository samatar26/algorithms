// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeuio]/gi)

  return matches ? matches.length : 0
}

module.exports = vowels

// function vowels(str) {
//   let counter = 0
//   const matcher = ['a', 'e', 'u', 'i', 'o']
//
//   for (let char of str.toLowerCase()) {
//     if (matcher.includes(char)) counter++
//   }
//
//   return counter
// }
