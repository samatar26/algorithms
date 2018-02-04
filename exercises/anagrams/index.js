// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanString(stringA) === cleanString(stringB)
}

function cleanString(str) {
  return str
    .toLowerCase() // turn string to lowercase
    .match(/[a-z]/g, '') // sanatize from spaces and special characters and turn into array
    .sort('') // sort the array alphabetically
    .join('') // turn arrya back into string
}
module.exports = anagrams

//Solution #1
// Create a character mapping for both sanatized strings
// If the length of each mapping's keys does not equal each other return false
// Loop over one charMap and if the value of charMapA's property doesn't equal the value of charMapB's property return false
// If none of this happens return true as the strings are anagrams!

// function anagrams(stringA, stringB) {
//   const charMapA = buildCharMap(stringA)
//   const charMapB = buildCharMap(stringB)
//
//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length)
//     return false
//
//   for (let char in charMapA) {
//     if (charMapA[char] !== charMapB[char]) {
//       return false
//     }
//   }
//
//   return true
// }
//
// function buildCharMap(str) {
//   let charMap = {}
//
//   for (let char of str.replace(/\W/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1
//   }
//   return charMap
// }
