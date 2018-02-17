![solution-description](https://user-images.githubusercontent.com/22747985/36064409-86eeb244-0e82-11e8-8ac2-69bc630dd6de.png)

```js
function matrix(n) {
  let res = []
  for (let i = 0; i < n; i++) {
    res.push([])
  }

  let startRow = 0
  let startColumn = 0
  let endRow = n - 1
  let endColumn = n - 1
  let counter = 1

  while (startRow <= endRow && startColumn <= endColumn) {
    // Loop from startColumn to endColumn
    for (let i = startColumn; i <= endColumn; i++) {
      res[startRow][i] = counter
      counter++
    }

    startRow++

    // Loop from startRow to endRow
    for (let i = startRow; i <= endRow; i++) {
      res[i][endColumn] = counter
      counter++
    }

    endColumn--

    // Loop from endColumn to startColumn
    for (let i = endColumn; i >= startColumn; i--) {
      res[endRow][i] = counter
      counter++
    }

    endRow--

    //Loop from endRow to startRow
    for (let i = endRow; i >= startRow; i--) {
      res[i][startColumn] = counter
      counter++
    }

    startColumn++
  }

  return res
}
```
