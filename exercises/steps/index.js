// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n, row = 0, stair = '') {
  if (n === row) return

  if (n === stair.length) {
    console.log(stair)
    return steps(n, row + 1)
  }

  if (stair.length <= row) {
    stair += '#'
  } else {
    stair += ' '
  }

  steps(n, row, stair)
}

module.exports = steps

// function steps(n) {
//   // row number until n
//   for (let row = 0; row < n; row++) {
//     let stair = '' // For each row we'll create an empty string 'stair'
//
//     for (let column = 0; column < n; column++) {
//       //column number for row
//       // as long as column number is less than row number push #
//       // i.e. row number 6, will have 6 columns of # and rest spaces
//       if (column <= row) {
//         stair += '#'
//       } else {
//         stair += ' '
//       }
//     }
//   }
// }

// function steps(n) {
//   let row = 1
//
//   while (row <= n) {
//     const pounds = '#'.repeat(row)
//     const spaces = ' '.repeat(n - row)
//     res = pounds + spaces
//     console.log(res)
//     row++
//   }
// }
