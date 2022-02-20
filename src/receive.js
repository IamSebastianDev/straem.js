/** @format */

import { stream } from "./stream.js";

/**
 * The dispatch method is used to create a custom eventListener.
 *
 * @param  {...string} eventNames - Any number of strings that describes the names of the
 * CustomEvents/Events to listen to.
 * @returns { { eventNames: string[], eventTarget: EventTarget, with: function, then: function } } an object
 * containing the eventName/s, eventTarget, the 'from()' method to set the eventTarget and the the 'then()'
 * method to execute a given callback when the event is received.
 */

export const receive = (...eventNames) => {
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
