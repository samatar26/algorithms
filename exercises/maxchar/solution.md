```js
function maxChar(str) {
  const charMap = {}
  let max = 0
  let maxChar = ''

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char]
      maxChar = char
    }
  }

  return maxChar
}
```

We first creating a character mapping to occurrence of the string by using a for .. of loop. Note that a for of loop is used to iterate over any iterable object such as a String or an array. When we want to iterate over an actual object, we'll have to use a for .. in syntax. We'll look for each character in the charMap and if the particular number of occurrences for the character is greater than max, we'll update our max and maxChar variables.
