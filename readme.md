<!-- @format -->

# Stræm.js

Stræm.js is a minimal wrapper for the [Custom Event API](https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent).

## 🚀 Getting started

To use **Stræm** with npm and/or a bundler such as webpack or rollup, install it via npm:

```bash
npm install straemjs
```

You can also use it directly in the browser and include it via CDN (or locally, if you like).

```html
<head>
  ...
  <!-- as a local file -->
  <script src="./your/path/to/straem.browser.min.js"></script>
  <!-- or via CDN -->
  <script src="http://unpkg.com/straemjs"></script>
  ...
</head>
```

## 🔧 Usage

### Imports and Global

**Stræm** provides exports for modern `import` syntax as well as exports for the `require` syntax.

```js
const { receive, dispatch } = require("straemjs");

import { receive, dispatch } from "straemjs";
```

In case you included the **Stræm** file via CDN, the `straem` object is globally available.

```js
const { receive, dispatch } = straem;
```

### Creating a custom event listener

To receive and listen to custom (or built-in) event, use the `receive()` method

```js
import { receive } from "straemjs";

// Use the receive method to register one or more event names for the listener

const listener = receive("custom-event", "another-event");

// You can use the 'from' method to set the target of the event

const listener = receive("custom-event").from("window");

// To create the listener(s) and register a callback, use the 'then' method returned by
// either the 'receive' or 'from' method and pass a handler and an optional opitions object.
// The method returns a function to remove the created listener(s).

const dispose = receive("custom-event").then(handler, eventInit);
```

### Dispatching a custom event

To dispatch a custom event, use the `dispatch()` method.

```js
import { dispatch } from "straemjs";

// Use the dispatch method to register one ore more event names for dispatching.
// As with the receive method, you can chain the from method to set the target.

const send = dispatch("custom-event").from(window);

// Use the 'with' method to dispatch the event with a given payload.

send.with({ hello: "world" });
```

## API

## `receive()`

`receive(...string) => { from: function, then: function, eventTarget: EventTarget, eventNames: string[] }`

The receive method is used to create a custom event listener. Pass any number of strings as argument. The method returns the reciever object, containing the `from()`, `then()`, `eventTarget` & `eventNames` properties.

## `dispatch()`

`dispatch(...string) => {from: function, with: function, eventTarget: EventTarget, eventNames: string[] }`

The dispatch method is used to create a custom event dispatcher. Pass any number of strings as argument. The method returns the reciever object, containing the `from()`, `with()`, `eventTarget` & `eventNames` properties.

## `from()`

`from(EventTarget) => { this }`

The from method is used to set the eventTarget of the `receive()`of `dispatch()` methods. The method will return the receive of dispatch object, respective of the method that it was called from.

## `then()`

`then(handler: function, eventInit: object) => function`

The then method is used to execute the specified handler function when the custom event is received. The method takes a `eventInit` object as second parameter, which is equal to the options provided by the [Event interface](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event). The method returns a function to remove all created listeners.

## `with()`

`with(payload: any, eventInit: object) => void`

The with method is used to dispatch the created event from the `dispatch()` method with a specified payload. The method takes a `eventInit` object as second parameter, which is equal to the options provided by the [Event interface](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event). The payload will default to `null` if not specified.

## License

Stræm.js is licensed under the [MIT License](https://opensource.org/licenses/MIT)
