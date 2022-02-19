/** @format */

import { stream } from "./stream.js";

/**
 *
 * @param  {...string} eventNames
 */

export const dispatch = (...eventNames) => {
  return {
    ...stream(),
    eventNames,
    with(payload, eventInit = {}) {
      // Add the payload to the eventInit object.
      eventInit.detail = payload;

      eventNames.forEach((eventName) =>
        this.eventTarget.dispatchEvent(new CustomEvent(eventName, eventInit))
      );
    },
  };
};
