/** @format */

import { assertBrowserEnviroment } from "./utils/assertBrowserEnviroment.js";
import { assertEventTarget } from "./utils/assertEventTarget";

export const stream = () => {
  /**
   * Run a enviroment test to assert that the enviroment is a browser, as stream will not work in a node enviroment.
   */

  if (!assertBrowserEnviroment()) {
    throw new Error(
      `Stream: Stream is only available in a browser enviroment.`
    );
  }

  let eventTarget = window;

  return {
    eventTarget,
    from(target) {
      // Check if the passed target is a valid EventTarget instance and throw a TypeError if not,
      // to ensure that the 'with' method receives a valid target.
      if (!assertEventTarget(target)) {
        throw new TypeError(
          `Stræem: ${target} is not a valid target for a receiving or dispatching events.`
        );
      }

      this.eventTarget = target;
      return this;
    },
  };
};
