### Insert method


```js
class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data)
    } else if (data < this.data) {
      this.left = new Node(data)
    } else if (data > this.data && this.right) {
      this.right.insert(data)
    } else if (data > this.data) {
      this.right = new Node(data)
    }
  }
}
```

To create a BST, when inserting data, we first check if the incoming data is less than the node's data and if the left child node already exists. If so, we call the left child node's insert method with the data, else we set the parent node's left property to a new node with our incoming data. We do the same if the data is greater than the parent node's data value. 

### Contains 

```js
class Node {
  constructor(data) {
    this.data = data
    this.left = null
    this.right = null
  }

  insert(data) {
    if (data < this.data && this.left) {
      this.left.insert(data)
    } else if (data < this.data) {
      this.left = new Node(data)
    } else if (data > this.data && this.right) {
      this.right.insert(data)
    } else if (data > this.data) {
      this.right = new Node(data)
    }
  }

  contains(data) {
  if (this.data === data) return this

  if (data < this.data && this.left) {
    return this.left.contains(data)
  } else if (data > this.data && this.right) {
    return this.right.contains(data)
  }

  return null
}
}
```

Since we're calling the function  recursively we have to stick a return value in front of any function call as we want to return a value from the function. If the node we're looking at has the same data value as the contains argument, we return the entire node, else we call, the left or right child node's contains value and look at their data property. If we end up with no found and we do not hit our base case, we return null.