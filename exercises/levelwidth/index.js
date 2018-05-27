// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
  let nodes = [root, 'stop']
  let width = [0]

  while (nodes.length > 1) {
    const node = nodes.shift()
    if (node === 'stop') {
      width.push(0)
      nodes.push(node)
    } else {
      nodes.push(...node.children)
      width[width.length - 1]++
    }
  }

  return width
}

module.exports = levelWidth
