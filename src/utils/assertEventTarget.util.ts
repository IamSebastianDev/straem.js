/** @format */

/**
 * @description
 * Utility method to assert that a given element is a valid EventTarget instance. EventListeners/Dispatchers can
 * only be attached to EventTargets.
 *
 * @param { * } eventTarget - the proposed EventTarget that will be asserted
 * @returns { boolean } true if proposed target is an instance of an EventTarget
 */

export const assertEventTarget = (eventTarget: any): boolean => eventTarget instanceof EventTarget;
