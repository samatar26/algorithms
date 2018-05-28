# Bubblesort

```js
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const greater = arr[j]
        arr[j] = arr[j + 1]
        arr[j + 1] = greater
      }
    }
  }
  return arr
}
```

We loop through all the elements of the array and at each index, we have an inner loop which will loop through the entire array minus the value of i. This is because after the first iteration, the largest number will be moved all the way to the end, as you can see we're comparing two elements besides each other and swapping them out if previous is greater than the next one. This will result in the greatest value to be pushed to the end of the array, meaning that we can look at a lesser portion of the array after each iteration.