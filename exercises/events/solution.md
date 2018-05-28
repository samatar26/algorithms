## Solution

With an eventing library, we should be able to:
-  register and event with a given event name, i.e. `click`. We should also be able to register multiple different event handlers with one event name.
-  We should be able to trigger manually all these different event handlers by calling something like `trigger` and passing in the event name we want to trigger.
- We should also be able to disable all the callbacks associated with a single event name by calling off and passing in the given event name.

```js
class Events {
  constructor() {
    this.events = {}
  }
  // Register an event handler
  on(eventName, callback) {
    if (typeof callback === 'function') {
      this.events[eventName] = this.events[eventName]
        ? [...this.events[eventName], callback]
        : [callback]
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]) {
      for (let cb of this.events[eventName]) cb()
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    delete this.events[eventName]
  }
}

```