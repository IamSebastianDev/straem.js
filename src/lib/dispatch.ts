/** @format */

import { assertEnvironment } from '../utils/assertEnvironment.util';
import { assertEventTarget } from '../utils/assertEventTarget.util';
import type { Dispatcher, FromFunction, WithFunction } from '../types';

/**
 * The dispatch method is used to create and dispatch a CustomEvent.
 *
 * ```js
 * import { dispatch } from "straem";
 * // dispatch two events from document containing the msg property
 * // in the event.detail property of the event object.
 * dispatch('event1', 'event2').from(document).with({ msg: 'Hello World' })
 *
 * ```
 *
 * @param  {...string} eventNames - Any number of strings that describes the names of the
 * CustomEvents to dispatch.
 * @returns { Dispatcher } the `Dispatcher` object containing the `from` and `with` methods to
 * dispatch an event with a chosen payload.
 */

export const dispatch = (...eventNames: string[]): Dispatcher => {
    if (!assertEnvironment()) throw new Error(`[straem] Straem.js is only available in a browser environment`);

    let target: EventTarget = window;

    const withFunction: WithFunction = (payload?: any, eventInit?: EventInit): void => {
        eventNames.forEach((eventName) =>
            target.dispatchEvent(new CustomEvent(eventName, { ...(eventInit ?? {}), detail: payload }))
        );
    };

    const fromFunction: FromFunction = (eventTarget: EventTarget): Dispatcher => {
        if (!assertEventTarget(eventTarget)) throw new TypeError(`[straem] ${eventTarget} is not a valid eventTarget.`);
        target = eventTarget;

        return {
            eventNames,
            eventTarget: target,
            from: fromFunction,
            with: withFunction,
        };
    };

    return {
        eventNames,
        eventTarget: target,
        from: fromFunction,
        with: withFunction,
    };
};
