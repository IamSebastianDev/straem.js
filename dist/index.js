'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

/** @format */

/**
 * Utility method to assert the given enviroment. Stræm will only work in a browser enviroment.
 * While node does implement a EventTarget interface, it does not work like the browser one.
 *
 * @returns { boolean } true / false depeding on the assert result
 */

const assertBrowserEnviroment = () =>
  !(typeof process === "object" && String(process) === "[object process]");

/** @format */

/**
 * Utility method to assert that a given element is a valid EventTarget instance. EventListeners/Dispatchers can
 * only be attached to EventTargets.
 *
 * @param { * } eventTarget - the proposed eventTarget that will be asserted
 * @returns { boolean } true / false depeding on the assert result
 */

const assertEventTarget = (eventTarget) =>
  eventTarget instanceof EventTarget;

/** @format */

const stream = () => {
  /**
   * Run a enviroment test to assert that the enviroment is a browser, as stream will not work
   * in a node enviroment.
   */

  if (!assertBrowserEnviroment()) {
    throw new Error(
      `Stream: Stream is only available in a browser enviroment.`
    );
  }

  // set the eventTarget property to window by default to ensure that a valid target exists

  let eventTarget = window;

  return {
    /**
     * The intended eventTarget existing on the dispatcher/listener.
     * @type { EventTarget }
     */

    eventTarget,

    /**
     * Method to set the eventTarget for the dispatcher/listener.
     *
     * @param { EventTarget } eventTarget - the supposed eventTarget that should be used to create the
     * listener/dispatcher.
     *
     * @returns { { eventNames: string[], eventTarget: EventTarget, with: function, from: function  then: function} }
     * an object containing the eventName/s, eventTarget, the 'from()' method to set the eventTarget and the the
     * 'with()' method to dispatch the event with a given payload or the 'then()' method to execute a callback,
     * depending on if the from method was called by the dispatch or receive method.
     */

    from(eventTarget) {
      // Check if the passed target is a valid EventTarget instance and throw a TypeError if not,
      // to ensure that the 'with' method receives a valid target.
      if (!assertEventTarget(eventTarget)) {
        throw new TypeError(
          `Stræem: ${target} is not a valid target for a receiving or dispatching events.`
        );
      }

      this.eventTarget = eventTarget;
      return this;
    },
  };
};

/** @format */

/**
 * The dispatch method is used to create a custom eventListener.
 *
 * @param  {...string} eventNames - Any number of strings that describes the names of the
 * CustomEvents/Events to listen to.
 * @returns { { eventNames: string[], eventTarget: EventTarget, with: function, then: function } } an object
 * containing the eventName/s, eventTarget, the 'from()' method to set the eventTarget and the the 'then()'
 * method to execute a given callback when the event is received.
 */

const receive = (...eventNames) => {
  return {
    ...stream(),

    /**
     * The array of strings passed as eventNames
     * @type { string[] }
     */

    eventNames,

    /**
     * Method to set the callback and options for the EventListener for the given eventTarget.
     *
     * @param { function(Event) } eventHandler - the function to call when a event is received. The handler will
     * receive the Event as argument.
     * @param { {}? } options - a optional options object to pass to the listener. Implements the same interface as
     * a regular eventListener
     *
     * @returns { function } a function to remove all created eventListeners
     */

    then(eventHandler, options) {
      const handler = (ev) => eventHandler(ev);

      eventNames.forEach((eventName) =>
        this.eventTarget.addEventListener(eventName, handler, options)
      );

      return () => {
        eventNames.forEach((eventName) =>
          this.eventTarget.removeEventListener(eventName, handler, options)
        );
      };
    },
  };
};

/** @format */

/**
 * The dispatch method is used to create and dispatch a CustomEvent.
 *
 * @param  {...string} eventNames - Any number of strings that describes the names of the
 * CustomEvents to dispatch.
 * @returns { { eventNames: string[], eventTarget: EventTarget, with: function, from: function } } an object
 * containing the eventName/s, eventTarget, the 'from()' method to set the eventTarget and the the 'with()'
 * method to dispatch the event with a given payload
 */

const dispatch = (...eventNames) => {
  return {
    ...stream(),

    /**
     * The array of strings passed as eventNames
     * @type { string[] }
     */

    eventNames,

    /**
     * Method to disptach the event with a give payload. A event will be dispatched for every eventName existing on the
     * created dispatcher. The eventInit object is optional and is the same as a regular event.
     *
     * @param { * } payload - The payload that will be created on the event.detail property.
     * @param { {}? } eventInit - a eventInit object as described by the Event() interface.
     */

    with(payload, eventInit = {}) {
      // Add the payload to the eventInit object.
      eventInit.detail = payload;

      eventNames.forEach((eventName) =>
        this.eventTarget.dispatchEvent(new CustomEvent(eventName, eventInit))
      );
    },
  };
};

exports.dispatch = dispatch;
exports.receive = receive;
//# sourceMappingURL=index.js.map
