```js
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
```
 
To retrieve the number of elements at each level of the tree, we first create an array that contains the root node and a variable called 'stop'. We'll also have an array called width which we'll initialize with 0. 

There's two conditions we need to consider. If the node is our counter variable 'stop', we push a new counter to the widths array which will represent a new level, and push the stop variable to the end of our nodes array. Then for the the next level, we push all of the node's children to the end of the array until we reach the stop variable again while incrementing the level's counter in our width array.