# AlgoCasts

### Runtime Complexity

##### What is runtime complexity?

It's a term used to describe how performant an algorithm is. We use runtime complexity to compare different solutions to a given problem. It's common in the context of an interview _**to be asked what the runtime complexity of a given problem is.**_
So usually you'll be asked a question and you'll solve it on a computer or a whiteboard and then they'll turn to you and ask you what the runtime complexity is of the solution you've provided.

With runtime complexity we're really asking _**How much more processing power/time is required to run your algorithm if we double the inputs?**_.

##### Linear Runtime (N)

![string-reverse](https://user-images.githubusercontent.com/22747985/36342957-9f6147da-13fd-11e8-8a8e-0cce2b14bd3e.png)

For this problem we iterated through each character of the string exactly one time. So if we add one additional character to the input string of the algorithm, we have to do one additional unit of work. This is referred to as a _**linear runtime**_ or _**N**_.

#### Quadratic Runtime (N^2)

![steps-problem](https://user-images.githubusercontent.com/22747985/36343010-3a6f54f6-13fe-11e8-901e-005523faf626.png)

As we started to increase the value `n` we had to do significantly more things each time `n` was increased by 1. There is not a 1:1 relationship to the input of our algorithm and the number of things we had to do or basically the amount of processing power that's required. The number of things we had to do is _**N^2**_, we had to essentialy do `N*N` things to execute our algorithm. When you have to do `N*N` things, you'd refer to this a _**N^2**_ runtime complexity or a _**quadratic runtime**_.

### Common runtimes

![runtimes](https://user-images.githubusercontent.com/22747985/36343429-1cbc31a8-1404-11e8-9019-996ecff27378.png)

#### Constant Runtime (1)

No matter what input we give to the algorithm it's always going to take the exact same of time to execute the algorithm:

* 1

#### Logarithmic Time (log(n))

We'll have a logarithmic runtime if we double number of elements we're working with, but it doesn't exactly double the amount of work we have to do.

Logarithmic runtimes are most important whenever we start looking at any type of search algorithm. I.e. searching through a sorted array of data.

#### Linear runtime (n)

You can easily identify this if you're iterating through some collection of data. If you add one element to your input set, it will take one more unit of work/time to complete the algorithm.

#### Quasilinear runtime ( n \* log(n) )

If you increase the input set by 1, it would increase the time to execute the algorithm by 1 plus a little bit. Many different sorting algorithms usually work with _**n \* log(n)**_ runtime.

### Exponential runtime ( 2 ^ n )

If you add a single element to a collection, the processing power required doubles. This is one of the worst scenarios. Should never be proposed as a solution as there's almost always a better/more efficient solution.

## Big 'O' Notation

![Big O](https://user-images.githubusercontent.com/22747985/36344510-610a60aa-1413-11e8-87cf-26af905c2fba.png)

This is another way of referencing runtime complexity. It's a way of writing out runtime complexity that's commonly seen in the academic world (although the term means something slightly different, Look up!).

## Identifying Runtime Complexity

![Identifying Big O](https://user-images.githubusercontent.com/22747985/36344562-90053096-1414-11e8-8ad1-7fc556903ad5.png)

## Space Complexity

We've been talking about runtime complexity which is a reference to the performance of an algorithm in terms of processing power. Space complexity is a reference to how much memory/RAM/space an algorithm needs to complete a given task. You can generally apply a lot of the same rules of runtime complexity to space-time complexity, i.e. for the string reversal algorithm and the steps algorithm it's the same. As i.e. for n = 2 in the steps algorithm we'll need 4 items in memory and for n =3 we'll need 9 items in memory so i.e. quadratic runtime for space complexity as well.

The space and runtime complexity won't always be identical and can sometimes be very different.

## Data structures

A data structure is a way of organizing information or data with some optimal _**runtime complexity**_ for adding or removing records. JavaScript natively implements several data structures.

#### Queue

![queue](https://user-images.githubusercontent.com/22747985/36353478-f48c9932-14be-11e8-84c0-73b424f7c3c8.png)

A queue can be thought of a container where records or pieces of data enter on one end of the container and exit on the other.

`Enqueuing` is the process of adding a record and taking something out of the other end/removing a record is known as `dequeuing`.

![FIFO](https://user-images.githubusercontent.com/22747985/36353538-8d718842-14bf-11e8-9d21-b5ca67ebb16e.png)

A queue follows a `First In First Out (F-I-F-O)` principle.

In JavaScript when we want to implement a queue, what we usually end up doing is taking an array and restricting the methods that can be used to interact with the array. I.e. adding an item to an array is done by calling `array.unshift()` and removing an item from the end of the array is done by calling `array.pop()`.

So a very common way of implementing a queue in JavaScript is making a `Queue class` and inside of that class we'd initialize an empty array. But we'll usually only expose the unshift and pop methods outside of the class. One possible reason to use a queue and hide the methods an array normally has is to make sure that if another engineer comes to look at your project won't think that it's just an array and i.e. reorder the elements or remove some.

### Stack

![stack](https://user-images.githubusercontent.com/22747985/36354697-2618ac5a-14d0-11e8-9347-822b5ea92262.png)

A stack is extraordinarily similar to a queue. With a stack you're still dealing with an ordered list of records and you can imagine those records living in some sort of container, i.e. the stack. When you add a record to an existing stack we refer to this as pushing a new record onto the stack. Removing a record from the stack is referred to as popping.

The big difference between a stack and a queue is the order in which items are added and removed. With a queue it's `FIFO` whereas with a stack it's `(First In Last Out) FILO`. So you can think of it as pushing the records on top of each other. Whereas with a queue it's adding a record to the end of the queue for removal.

## Linked List

![linked-list](https://user-images.githubusercontent.com/22747985/36630863-419b4f98-1965-11e8-87c3-fcd3c7dc4b09.png)

A linked list is an ordered collection of data. The collection contains a number of different _**nodes**_. Each node contains some amount of data, along with a reference to the next node. So when we put a handful of these nodes together we refer to it as a linked list as it is quite literally a list of linked nodes. It's also frequently referred to as a chain or a chain of nodes that are strung together.

The list of nodes that form this chain has an order that's always maintained, so it won't suddenly or randomly change unless we specifically want to change it of course. In ever linked list there are two special nodes that you'll always see: The _**head**_ node, which is always the very first node of the linked list and _**tail**_ node, which is always the very last node of the linked list. The tail node can always be identified by the fact that it doesn't have a reference to any other node. Every single node has two discreet parts to it. Some data which can be any type of valid JavaScript value, i.e. a string, a number, an object, etc. The other part of the node is a reference to the next node.

Here is a quick example of a linked list:

```js
const nodeOne = {
  data: 123,
}

const nodeTwo = {
  data: 456,
}

nodeOne.next = nodeTwo
```

By convention we usually make sure that a node has two properties, a data property and a next property. The above is a very straightforward and simple implementation of a linked list. As long as you have some separate pieces of data and form some type of connection between them you can refer to that as a linked list.

## Trees

![tree](https://user-images.githubusercontent.com/22747985/40579676-fb8ee142-6124-11e8-9418-39fa88920176.png)

A tree is another data structure. There are several different types of trees. The above diagram shows the basic structure of a tree. Each box can be referred to as a node which holds some data and it will also hold a reference to all of its children. I.e. 0, 40 and -15 can refer to 20 as its parent. There's a child-parent relationship between different nodes on a tree. The data can be absolutely anything.

12 and -2 can be referred to as siblings, although nodes can be on the same level they aren't necessarily siblings if they don't have the same parent.

One of the most common operations you will have to do on a tree is _**tree traversal**_, which is essentially iterating through all the different elements within a tree. We will be learning two distinct ways of how to iterate through a tree. I.e. the order in which elements we iterate through the tree as there isn't a real distinct order at which you'd visit the elements.

#### Breadth-First Traversal

![breadth-first-traversal](https://user-images.githubusercontent.com/22747985/40579747-c330c5c0-6126-11e8-8689-4289a660a9c3.png)

This is essentially starting at the top level, going from left to right and then to the next level from left to right. It doesn't matter that [12, -2, 1] and [-2] do not share the same parent.

### Depth-First Traversal

![depth-first-traversal](https://user-images.githubusercontent.com/22747985/40579753-1de1c370-6127-11e8-903b-d646a2742911.png)

We start at the very top of the tree and go down the very left-hand side as far as we can go, `"We span the depth of the tree"` and soon as we hit the bottom we go back up to closest parent and go back down again until there are no elements left to traverse.

## Binary Search Tree

![Binary Search Tree](https://user-images.githubusercontent.com/22747985/40589687-cfec8506-61e9-11e8-95a5-06159a5aacd4.png)

A binary search tree is a tree in which every node can have 2 children at most. We usually refer to these 2 children by their position relative to their parent. I.e. with the root node, 0 would be the left node and 12 would be called the right node. Not only do we restrict the number of children a node can have, but also its value. For any given node, it's left node's value has to be less than the node's value, whereas the right node's value has to be greater than the node's value. In a BST, the data can also usually be referred to as something else, like `value`, `key`, `data`, etc.

Since the number of child nodes a node can have is restricted to two, instead of assigning its children to a children property, it's common to have a left, and right property.

One of the most common questions/problems is adding a new node into the right location within the tree. Another problem could be validating a BST, i.e. left node's value is less than parent node's value and right node's value is greater than parent node's value and each node has 2 children max.

BST shouldn't be confused with a Binary Tree, as the `search` in Binary Search tree is what places the requirement on the values to the left and right of the parent node. A BT is a normal tree that just has 2 nodes underneath each parent.

## Sorting algorithms

In an interview-setting it's usually about taking an array of numbers and sorting them from lowest to greatest.

![sorting-algorithms](https://user-images.githubusercontent.com/22747985/40622498-dc137cd0-6299-11e8-80ff-7807ae32108a.png)
