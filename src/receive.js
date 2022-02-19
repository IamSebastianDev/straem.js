/** @format */

import { stream } from "./stream.js";

export const receive = (...eventNames) => {
  return {
    ...stream(),
    eventNames,
    then(callback, options) {
      const eventHandler = (ev) => callback(ev);

      eventNames.forEach((eventName) =>
        this.eventTarget.addEventListener(eventName, eventHandler, options)
      );

      return () => {
        eventNames.forEach((eventName) =>
          this.eventTarget.removeEventListener(eventName, eventHandler, options)
        );
      };
    },
  };
};
