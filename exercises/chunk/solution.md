```js
function chunk(array, size) {
  let chunked = []

  for (let element of array) {
    const lastChunk = chunked[chunked.length - 1]

    if (!lastChunk || lastChunk.length === size) {
      chunked.push([element])
    } else {
      lastChunk.push(element)
    }
  }
  return chunked
}
```

With this solution we're iterating over the array and we first create a local variable which is equal to the last element in the new `chunked` array. If that element's length is equal to the size specified we will push in a new sub array and if not we will push the element into the specified chunk!

### Solution 2

```js
function chunk(array, size) {
  let chunks = []
  let index = 0

  while (index < array.length) {
    chunks.push(array.slice(index, size + index))
    index += size
  }

  return chunks
}
```

With our second solution:

* we still created an empty `chunks` array.
* Create an index variable that starts at 0.
* A while loop which runs while index < array.length
* We push a slice of length `size` from `array` into `chunks`
* Then add `size` to index
