/** @format */

/**
 * @description
 * Action passed to the `ThenFunction` to execute as a event callback. Receives the Event object as argument.
 *
 * @param { CustomEvent | Event } evt - the event object
 */

export type Action = <T>(evt: CustomEvent<T> | Event<T>) => void;
