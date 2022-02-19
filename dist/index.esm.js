/** @format */

const assertBrowserEnviroment = () =>
  !(typeof process === "object" && String(process) === "[object process]");

/** @format */

const assertEventTarget = (element) => element instanceof EventTarget;

/** @format */

const stream = () => {
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

/** @format */

const receive = (...eventNames) => {
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

/** @format */

/**
 *
 * @param  {...string} eventNames
 */

const dispatch = (...eventNames) => {
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

export { dispatch, receive };
//# sourceMappingURL=index.esm.js.map
