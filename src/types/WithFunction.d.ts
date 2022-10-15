/** @format */

/**
 * @description
 * Method to dispatch the event with a given payload. A event will be dispatched for every eventName existing on the
 * created `Dispatcher`. The eventInit object is optional and is the same as a regular event.
 *
 * @param { any } [payload] - The payload that will be created on the `event.detail` property.
 * @param { EventInit } [eventInit] - a eventInit object as used by the `Event()` interface. read [more](https://developer.mozilla.org/en-US/docs/Web/API/Event/Event)
 */

export type WithFunction = (payload?: any, eventInit?: EventInit) => void;
