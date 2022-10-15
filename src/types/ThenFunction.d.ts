/** @format */

import { Action } from './Action';
import type { Disposer } from './Disposer';

/**
 * Method to set the callback and options for the EventListener for the given eventTarget.
 *
 * @param { Action } action - the function to call when a event is received. The handler will
 * receive the Event as argument.
 * @param { AddEventListenerOptions } [options] - a optional options object to pass to the listener. Implements the
 * same interface as a regular eventListener
 *
 * @returns { Disposer } a function to remove all created eventListeners
 */

export type ThenFunction = <T>(action: Action<T>, options?: AddEventListenerOptions) => Disposer;
