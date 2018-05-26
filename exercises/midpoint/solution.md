### Solution

```js

// We use a slow variable that traverses the list one node at a time and a fast variable that traverses the list two nodes at a time. We continue traversing the list while the fast node has two nodes in front of it or else we return the slow node which will be at the middle of the list!


function midpoint(list) {
  let slow = list.head
  let fast = list.head

  while (fast.next && fast.next.next) {
    slow = slow.next
    fast = fast.next.next
  }

  return slow
}
```