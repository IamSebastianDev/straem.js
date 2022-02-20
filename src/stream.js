/** @format */

import { assertBrowserEnviroment } from "./utils/assertBrowserEnviroment.js";
import { assertEventTarget } from "./utils/assertEventTarget";

export const stream = () => {
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
