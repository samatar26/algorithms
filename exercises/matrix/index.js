// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]
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

module.exports = matrix
