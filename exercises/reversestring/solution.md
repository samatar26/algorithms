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

### Note
You can put a `debugger` statement in your code and this allows you to debug your code using node by:

* calling `node inspect filename.js` in your terminal.
* In order to continue execution of your your file you'll have to type `continue` or `c` in your terminal.
* Then you're able to view function results and variable values by launching a `repl` session and typing `repl` in your terminal
