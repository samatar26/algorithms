```js
function weave(sourceOne, sourceTwo) {
  const newQueue = new Queue()

  while (sourceOne.peek() || sourceTwo.peek()) {
    if (sourceOne.peek()) newQueue.add(sourceOne.remove())
    if (sourceTwo.peek()) newQueue.add(sourceTwo.remove())
  }

  return newQueue
}
```

The peek method on the queue class allows us to check whether the last element in the array exists/is undefined. A `weave` is a queue constructed of two other queues who have been added together alternately.
