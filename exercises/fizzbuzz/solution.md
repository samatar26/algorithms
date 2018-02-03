```js
function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    //Is the number a multiple of 3 and 5?
    if (i % 5 === 0 && i % 3 === 0) {
      console.log('fizzbuzz')
    } else if (i % 3 === 0) {
      //Is the number a multiple of 3?
      console.log('fizz')
    } else if (i % 5 === 0) {
      console.log('buzz')
    } else {
      console.log(i)
    }
  }
}
```

When it comes to fizzbuzz instead of trying to turn a relatively easy problem into a hard to understand one-liner, your best bet is to try and write legible, easy to follow code and also adding comments showing which part of the problem you are solving with your line of code
