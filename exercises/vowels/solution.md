### Solution 1 - Iterative

A good talking point for this solution is that it's better to have an array of things we want to check against our vowel rather than a string. Because someone coming in to the project might i.e. wonder whether the order of characters is important and this will allow us or other developers to easily extend the function to add more parameters to the matcher.

```js
function vowels(str) {
  let counter = 0
  const matcher = ['a', 'e', 'u', 'i', 'o']

  for (let char of str.toLowerCase()) {
    if (matcher.includes(char)) counter++
  }

  return counter
}
```

### Solution 2 - Regular Expression

Match returns an array of the matches found or null if no matches are found. So before using the .length property of the array prototype we will have to make sure that matches hasn't returned null.

```js
function vowels(str) {
  const matches = str.match(/[aeuio]/gi)

  return matches ? matches.length : 0
}
```
