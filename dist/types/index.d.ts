export var __esModule: boolean;
/** @format */
/**
 * The dispatch method is used to create and dispatch a CustomEvent.
 *
 * @param  {...string} eventNames - Any number of strings that describes the names of the
 * CustomEvents to dispatch.
 * @returns { { eventNames: string[], eventTarget: EventTarget, with: function, from: function } } an object
 * containing the eventName/s, eventTarget, the 'from()' method to set the eventTarget and the the 'with()'
 * method to dispatch the event with a given payload
 */
export function dispatch(...eventNames: string[]): {
    eventNames: string[];
    eventTarget: EventTarget;
    with: Function;
    from: Function;
};
/** @format */
/**
 * The receive method is used to create a custom eventListener.
 *
 * @param  {...string} eventNames - Any number of strings that describes the names of the
 * CustomEvents/Events to listen to.
 * @returns { { eventNames: string[], eventTarget: EventTarget, with: function, then: function } } an object
 * containing the eventName/s, eventTarget, the 'from()' method to set the eventTarget and the the 'then()'
 * method to execute a given callback when the event is received.
 */
export function receive(...eventNames: string[]): {
    eventNames: string[];
    eventTarget: EventTarget;
    with: Function;
    then: Function;
};
//# sourceMappingURL=index.d.ts.map