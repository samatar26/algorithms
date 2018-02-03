## Alternative solution - every helper

```js
function palindrome(str) {
  return str.split('').every((char, i) => char === str[str.length - 1 - i])
}
```

We can turn the string into an array and use the `every` method. We're going to take the first element of the array and compare it to the element at the end. Then we take the second element of the array and compare it to the second to last element of the array.

## Note
Once we reach the middle of the array, we'll compare it to itself and then we go backwards. So the thing to note is that we're doing more comparisons than necessary, because once we've checked every element up until the centre we don't need to continue the process. So this isn't ideally the most efficient solution, because we are doing twice as much work as we need to do.
