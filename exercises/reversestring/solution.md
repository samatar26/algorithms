### Solution 1

We first turn the string into an array
Then we call the reverse method of the array which reverses all the elements in the array
Then we convert the array back into a string.

```js
function reverse(str) {
  return str
    .split('')
    .reverse()
    .join('')
}
```

### Solution 2

We use a for of loop and for every character of our string, we append it at the beginning of our new string:

```js
function reverse(str) {
  let reversed = ''

  for (let character of str) {
    reversed = character + reversed
  }

  return reversed
}
```

### Solution 3

We use the reduce function on the array we create by calling the .split(method).
With the reduce function, we have our initial starting point which is our empty string and every time we iterate over our string we add the current character in front of our accumulator or reversed string:

```js
function reverse(str) {
  return str.split('').reduce((rev, char) => char + rev, '')
}
```
