## Node Implementation

![node-creation](https://user-images.githubusercontent.com/22747985/36630991-25065c4e-1968-11e8-8fbd-ec008980ec72.png)

```js
class Node {
  constructor(data, next = null) {
    this.data = data
    this.next = next
  }
}
```

Note - The property next is a reference to the `next node along the chain`, not the one before it.

## Linked list implementation

![linked-list](https://user-images.githubusercontent.com/22747985/36631066-2d87d55e-1969-11e8-8944-36847f87c2a5.png)

Well start off with the constructor function of the linked list which is used to initialize our linked list. We create the linked list with _**no head node**_ associated with it, so we can call `new LinkedList()` there should be no nodes associated with it. It should have one property called _**head**_, which is going to be a reference to the first node of the linked list. By default `head` should be `null`. The linked list has very little hard data associated with it, all it really knows is the first node of the list. We'll have to add methods to the class which will i.e. allow us to access the first node and crawl through the linked list and work through it in some meaningful fashion.

#### InsertFirst method

```js
class LinkedList {
  constructor() {
    this.head = null
  }

  insertFirst(data) {
    this.head = new Node(data, this.head)
  }
}
```

The insertFirst method on our LinkedList class allows us to insert nodes in our list. We call the method with some data, create a new node based on the data and assign our head property to this node. The first node we create won't contain a reference to another node and therefore it's next property will equal null, which is what initialized our head property of our linked list with. From then on, every node we insert into our list will point it's next property to the next node, i.e. this.head.

#### Size method

```js
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
}
```

We create two local variables size and node which is assigned the value of the property head of our LinkedList class. While a node exists we increment our size variable and reassign our node variable to the next property of our node. When we eventually reach the end of our list, the tail, it should assign our node variable to null and we then return the size of the linked list.

#### getFirst method

```js
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
}
```

The getFirst method should return the first node of the linked list. Since we know that a linked list class has a property called `head` which is equal to the first node of our linked list, we can simply return that.

### getLast method

```js
  getLast() {
    if (!this.head) return null //premature optimization??

    let node = this.head

    while (node && node.next) {
      node = node.next
    }

    return node
  }
```

### clear method

```js
clear() {
  this.head = null
}
```

All we have to do to clear the list of any nodes is assign the head property to null as this is a reference to the first node of the linked list.

### removeFirst method

```js
  removeFirst() {
    if (!this.head) return
    this.head = this.head.next
  }
```

Removing the first node of the list involves assigning the head (which holds a reference to the first node of the list) to the head's next property which points to the next/second node in the list. In the case that there are no nodes in the list we simply return and do nothing.

### removeLast method

```js
getLast() {
  //if the list is empty, we immediately return
  if (!this.head) return
  //if the list only has one node, we don't want to do any unnecessary assignments/iterations
  if (!this.head.next) {
    this.head = null
    return
  }

  let previous = this.head
  let node = this.head.next

  while(node.next) {
    previous = previous.next
    node = previous.next
  }

  previous.node = null
}
```

### insertLast method

```js
insertLast(data) {
  const last = this.getLast() //First we retrieve the last node in our list

  if (last) {
    //If there is a node we'll set the next property on that node equal to our new node
    last.next = new Node(data)
  } else {
    //If the list is empty we'll set the head equal to our new node as it's the first node in our linked list
    this.head = new Node(data)
  }
}
```
