/** @format */

import { stream } from "./stream.js";

/**
 * The dispatch method is used to create and dispatch a CustomEvent.
 *
 * @param  {...string} eventNames - Any number of strings that describes the names of the
 * CustomEvents to dispatch.
 * @returns { { eventNames: string[], eventTarget: EventTarget, with: function, from: function } } an object
 * containing the eventName/s, eventTarget, the 'from()' method to set the eventTarget and the the 'with()'
 * method to dispatch the event with a given payload
 */

export const dispatch = (...eventNames) => {
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
