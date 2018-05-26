### Solution

To get the nth node from last, we first move the second pointer n spaces ahead, while the first pointer points at the head. Then when the second/fast pointer reaches the end of the list, the first/slow pointer will be n elements from last!

```js
function fromLast(list, n) {
  let slow = list.head
  let fast = list.head

  while (n > 0) {
    fast = fast.next 
    n--
  }

  while (fast.next) {
    slow = slow.next
    fast = fast.next
  }

  return slow
}
```