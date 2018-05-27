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