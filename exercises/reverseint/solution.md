```js
function reverseInt(n) {
  const reversed = n
    .toString()
    .split('')
    .reduce((rev, num) => num + rev, '')

  return Math.sign(n) * parseInt(reversed)
}
```

We'll first have to convert the number to a string. In order to preserver the minus sign if provided, we can use the `Math.sign()` method which returns negative one for a negative number and positive 1 for a positive number.
