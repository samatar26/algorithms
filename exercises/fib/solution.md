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
