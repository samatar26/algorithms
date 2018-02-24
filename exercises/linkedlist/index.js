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
}

module.exports = { Node, LinkedList }
