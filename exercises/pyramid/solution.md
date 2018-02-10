### Solution 1

![description](https://user-images.githubusercontent.com/22747985/36062311-f6cc34f4-0e61-11e8-8732-0ae449380d86.png)

```js
function pyramid(n) {
  let lineLength = 2 * n - 1
  let midPoint = Math.floor(lineLength / 2)

  for (let row = 0; row < n; row++) {
    let level = ''

    for (let column = 0; column < lineLength; column++) {
      if (midPoint + row >= column && midPoint - row <= column) {
        level += '#'
      } else {
        level += ' '
      }
    }

    console.log(level)
  }
}
```

### Solution 2 - Recursive

```js
function pyramid(n, row = 0, level = '') {
  if (row === n) return

  if (level.length === 2 * n - 1) {
    console.log(level)
    return pyramid(n, row + 1)
  }

  let midPoint = Math.floor((2 * n - 1) / 2)
  let add

  if (midPoint + row >= level.length && midPoint - row <= level.length) {
    add = '#'
  } else {
    add = ' '
  }

  pyramid(n, row, level + add)
}
```
