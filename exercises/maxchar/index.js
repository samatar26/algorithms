// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {}

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1
  }

  let res = {
    maxChar: '',
    max: 0,
  }

  for (let char in charMap) {
    res = charMap[char] > res.max ? { maxChar: char, max: charMap[char] } : res
  }

  return res.maxChar
}

module.exports = maxChar
