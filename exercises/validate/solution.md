## BST Validate Solution

```js
function validate(node, min = null, max = null) {
  if (max && node.data > max) return false
  if (min && node.data < min) return false

  if (node.left && !validate(node.left, min, node.data)) {
    return false
  }
  if (node.right && !validate(node.right, node.data, max)) {
    return false
  }

  return true
}
```

We validate a BST recursively. Our first two checks check whether max and min have been set and whether the node's data is greater than max or less than min, which will invalidate the BST. As max and min haven't been set initially, we enter our third if-statement, where we check whether a left node exists and whether calling our validate function, with the left node, min = null and max set to the parent node's data returns false. If it returns false, this also means invalid BST. When we move down a node, we check whether the left node for example is greater than max. 

It gets really interesting when we eventually get to a right node and we call the validate function, with the right node, min = the parent node's data and max which is set to the grandparent's data. If the node's data is greater than than max, it will result in an invalid BST.