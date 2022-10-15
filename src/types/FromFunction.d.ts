/** @format */

/**
 * @description
 * Method to set the eventTarget for the dispatcher/listener.
 *
 * @param { EventTarget } eventTarget - the supposed eventTarget that should be used to create the
 * listener/dispatcher.
 *
 * @returns { Dispatcher } the Dispatcher object.
 */

export type FromFunction = (eventTarget: EventTarget) => Dispatcher;
