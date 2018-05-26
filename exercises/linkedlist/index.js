// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
  }

  size() {
    let size = 0
    let node = this.head
    while (node) {
      size++
      node = node.next
    }

    return size
  }

  getFirst() {
    return this.head
  }

  getLast() {
    if (!this.head) return null

    let node = this.head

    while (node && node.next) {
      node = node.next
    }

    return node
  }

  clear() {
    this.head = null
  }

  removeFirst() {
    if (!this.head) return
    this.head = this.head.next
  }

  removeLast() {
    if (!this.head) return

    if (!this.head.next) {
      this.head = null
      return
    }

    let previous = this.head
    let node = this.head.next

    while (node.next) {
      previous = previous.next
      node = previous.next
    }

    previous.next = null
  }

  insertLast(data) {
    const last = this.getLast()

    if (last) {
      last.next = new Node(data)
    } else {
      this.head = new Node(data)
    }
  }

  getAt(index) {
    let counter = 0
    let node = this.head

    while (node) {
      if (counter === index) return node
      counter++
      node = node.next
    }
    return null
  }

  removeAt(index) {
    if (!this.head) return
    if (index === 0) {
      this.head = this.head.next
      return
    }

    const previous = this.getAt(index - 1)
    if (!previous || !previous.next) return

    const nextNode = previous.next

    previous.next = nextNode.next
  }

  insertAt(data, index) {
    if (!this.head || index === 0) this.head = new Node(data, this.head)

    const previous = this.getAt(index - 1) || this.getLast(index - 1)

    const newNode = new Node(data, previous.next)
    previous.next = newNode
  }

  forEach(fn) {
    let index = 0
    let node = this.head

    while (node) {
      fn(node, index)
      node = node.next
    }
  }

  *[Symbol.iterator]() {
    let node = this.head
    while (node) {
      yield node
      node = node.next
    }
  }
}

module.exports = { Node, LinkedList }
