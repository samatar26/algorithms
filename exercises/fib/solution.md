### Solution 1 - iterative

```js
function fib(n) {
  let series = [0, 1]

  for (let i = 2; i <= n; i++) {
    const a = series[i - 1]
    const b = series[i - 2]
    series.push(a + b)
  }

  return series[n]
}
```

The runtime complexity is linear or `O(n)`.

* For every increase in `n` we have calculate one additional number. So as n increases by one we have to do one more calculation.
* We could also look at the for loop and since we're always starting at a fixed number and always incrementing by one and up to a fixed target, so chances are it's a linear runtime.

Prefer explanation 1.

### Solution 2 - Slow Recursive

```js
function fib(n) {
  if (n < 2) return n

  return fib(n - 1) + fib(n - 2)
}
```

![fib(0) - fib(1)](https://user-images.githubusercontent.com/22747985/36345401-656a4710-1421-11e8-9129-b8a09a096445.png)

The only time in which we appear to return a number from fibonacci is when n is less than 2.

![recursive diagram](https://user-images.githubusercontent.com/22747985/36345402-68eedfe0-1421-11e8-9d91-b1d7350416ec.png)

The whole time the interpreter is processing this recursive function call it has to remember how it got there. Because once it eventually gets down to the base cases and gets a numeric response it then has to build up to it's previous response.

## Memoization

![fib-6](https://user-images.githubusercontent.com/22747985/36352907-5943b2aa-14b7-11e8-90cc-1ab3692a0a8b.png)

With fib(5) we have 15 function calls and with fib(6) we have an additional 10 calls. This is referred to as exponential runtime. For every additional element to our input we have a dramatic increase in the number of function calls/operations required to calculate our value that we're trying to determine.

There is a way to improve the runtime of our algorithm. When we look at all the functional calls, you can immediately see that our function is being called multiple times with the same arguments.

This is where _**memoization**_ comes into play. When we memoize a function we're going to record the arguments of each function call and then we're going to run the function and store the result. So we'll have a little table in memory with the argument along with it's function results.

So if the function's called again with the _**same**_ arguments, rather than running the function again, we'll return the pre-computed result from our table.

![memoization-fib](https://user-images.githubusercontent.com/22747985/36353069-96c9d5f8-14b9-11e8-9c67-7741593e7984.png)

When we call fib with 6, we're going to immediately make a call to fib(5) and that's going to make a call to fib(4). We're then going to write some code which recognizes that our function is being called with an argument it's never been called with before. We'll then run the function and take the function result and store it so that whenever our function is called with the same argument we don't have to execute the function again.

### Solution 3 - Memoized Fib

```js
function memoize(fn) {
  const cache = {}

  return function(...args) {
    if (cache[args]) {
      return cache[args]
    }

    const result = fn.apply(this, args)
    cache[args] = result

    return result
  }
}

function fib(n) {
  if (n < 2) return n

  return fib(n - 1) + fib(n - 2)
}

fib = memoize(slowFib)
```

One important thing to note is that inside our fib function when we attempt to call the function recursively it's not a reference directly to the function, but a reference to the memoized version as we've reassigned it!
