### Solution 2 - Iterative

![solution-1](https://user-images.githubusercontent.com/22747985/35824053-81136aea-0aa9-11e8-859a-22f48ae84c40.png)

```js
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = ''

    for (let column = 0; column < n; column++) {
      if (column <= row) {
        stair += '#'
      } else {
        stair += ' '
      }
    }
  }
}
```

### Solution 2 - Recursive

With recursive solutions you always have to think of the `base case`. This is the case for which we stop calling the function recursively. Try thinking of your base case from the getgo. You also want to make sure that you change your arguments when calling the function or else you'll end up in an infinite loop. Tips:

![recursion-tips](https://user-images.githubusercontent.com/22747985/35824691-907f72e2-0aab-11e8-8937-994a938730a6.png)

Reasonable defaults means providing a default value for any (additional) parameters of your function.

![solution](https://user-images.githubusercontent.com/22747985/35856492-19b8df1c-0b2e-11e8-91a2-af9132761699.png)

```js
function steps(n, row = 0, stair = '') {
  if (n === row) return // base case, end of recursion

  if (n === stair.length) {
    // end of row
    console.log(stair)
    steps(n, row + 1)
  }

  if (stair.length <= row) {
    // step creation
    stair += '#'
  } else {
    stair += ' '
  }

  steps(n, row, stair)
}
```
