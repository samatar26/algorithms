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

### Solution 2 - Recursive

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
