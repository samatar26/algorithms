### Solution

```js
class Node {
  constructor(data) {
    this.data = data
    this.children = []
  }

  add(data) {
    this.children.push(new Node(data))
  }

  remove(data) {
    this.children = this.children.filter(node => node.data !== data)
  }
}
```

When creating a node for a tree, the only thing needed to initialize it is some data. It's children will always be implemented as an empty array. The `add` and `remove` method are using specifically to add or remove children to the node. With the `add` method, you can add it's children after initializing the node. The `remove` method takes some data and will filter it's children to remove the child with the associated data.