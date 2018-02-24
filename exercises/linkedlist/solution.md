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
