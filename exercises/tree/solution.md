### Solution -- Node

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

### Solution -- Tree

Our tree class will contain a `root` property which will be initialized to null. This will contain a reference to the absolute head/root/first node of our tree. It will also have our two traverse methods. Our tree won't have any add/insert methods like the LinkedList class. In the context of a tree, we usually associate manipulating the tree with the actual node.

A common example of `BreadthFirst traversal` is a company's hierarchy of positions: 

![company-position-hierarchy](https://user-images.githubusercontent.com/22747985/40586684-7f2d3d94-61bd-11e8-8f57-78559df40f7b.png)

You may be asked to print a list of the company's positions per organizational level. Another example could be a military hierarchy.

### BreadthFirst Traversal solution:
```js
class Tree {
  constructor() {
    this.root = null
  }

  traverseBF(fn) {
    const arr = [this.root]

    while (arr.length) {
      const node = arr.shift()
      arr.push(...node.children)

      fn(node)
    }
  }
}
```

We first initialize an array with the root node and then setup a while loop as long as our array contains node(s). We take out the first element/node in the array, push all of it's children and call our callback with the node we took out. It's truly from top to bottom and left to right!

### DepthFirst Traversal solution:
```js
  traverseDF(fn) {
    const arr = [this.root]

    while (arr.length) {
      const node = arr.shift()
      arr.unshift(...node.children)

      fn(node)
    }
  }
```

Similar to the BreadthFirst solution, the only difference being that the node's children are added at the start of the array instead of the end.