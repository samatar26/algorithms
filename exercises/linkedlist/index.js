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
}

module.exports = { Node, LinkedList }
