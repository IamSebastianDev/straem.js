/** @format */

import { assertEnvironment } from '../utils/assertEnvironment.util';
import { assertEventTarget } from '../utils/assertEventTarget.util';
import type { Receiver, FromFunction, ThenFunction, Disposer, Action } from '../types';

/**
 * The receive method is used to create a custom eventListener.
 *
 * ```js
 * import { receive } from "straem";
 * // listen to the 'event1' & 'event2' events on the document and log
 * // the event.detail property when triggered
 * const dispose = receive('event1', 'event2').from(document).then((evt) => console.log(evt.detail))
 *
 * // to clean up no longer needed or used event listeners manually,
 * // call the returned `dispose()` method.
 * dispose()
 * ```
 *
 * @param  {...string} eventNames - Any number of strings that describes the names of the
 * CustomEvents/Events to listen to.
 * @returns { Receiver } the `Receiver` object containing the `from` and `then` methods to setup the listener.
 */

export const receive = (...eventNames: string[]): Receiver => {
    if (!assertEnvironment()) throw new Error(`[straem] Straem.js is only available in a browser environment`);

    let target: EventTarget = window;

    const thenFunction: ThenFunction = (action: Action, options?: AddEventListenerOptions): Disposer => {
        eventNames.forEach((name) => target.addEventListener(name, action, options));
        return () => {
            eventNames.forEach((name) => target.removeEventListener(name, action, options));
        };
    };

    const fromFunction: FromFunction = (eventTarget: EventTarget): Receiver => {
        if (!assertEventTarget(eventTarget)) throw new TypeError(`[straem] ${eventTarget} is not a valid eventTarget.`);
        target = eventTarget;

        return {
            eventNames,
            eventTarget: target,
            from: fromFunction,
            then: thenFunction,
        };
    };

    return {
        eventNames,
        eventTarget: target,
        from: fromFunction,
        then: thenFunction,
    };
};
