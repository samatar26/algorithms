### Circular linked list

A linked list has a head and tail and the tail node can be identified because it points to a value of null which means it's the end of the list. In a circular linked list we do not have a tail node, we would have a tail node or what we might imagine to be the last node that will point at an earlier node in the linked list. It's a major problem as we will end up with an infinite loop.

```js
function circular(list) {
  let slow = list.head
  let fast = list.head

  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next

    if (fast === slow) return true
    //We're comparing whether the reference of the slow and fast object are equal to each other. I.e. the exact same instance of memory.
  }

  return false
}

```