```js
const Stack = require('./stack')

class Queue {
  constructor() {
    this.stackA = new Stack()
    this.stackB = new Stack()
  }

  add(record) {
    this.stackA.push(record)
  }

  peek() {
    while (this.stackA.peek()) {
      this.stackB.push(this.stackA.pop())
    }
    const record = this.stackB.peek()

    while (this.stackB.peek()) {
      this.stackA.push(this.stackB.pop())
    }
    return record
  }

  remove() {
    while (this.stackA.peek()) {
      this.stackB.push(this.stackA.pop())
    }
    const record = this.stackB.pop()

    while (this.stackB.peek()) {
      this.stackA.push(this.stackB.pop())
    }

    return record
  }
}
```
