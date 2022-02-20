/** @format */

/**
 * Utility method to assert that a given element is a valid EventTarget instance. EventListeners/Dispatchers can
 * only be attached to EventTargets.
 *
 * @param { * } eventTarget - the proposed eventTarget that will be asserted
 * @returns { boolean } true / false depeding on the assert result
 */

export const assertEventTarget = (eventTarget) =>
  eventTarget instanceof EventTarget;
