/** @format */

import type { WithFunction } from './WithFunction';
import type { FromFunction } from './FromFunction';

export type Dispatcher = {
    /**
     * @description
     * Array of event names used by the Dispatcher/Receiver.
     * @type { string[] }
     */
    eventNames: string[];
    /**
     * @description
     * The intended eventTarget existing on the Dispatcher/Receiver.
     * @type { EventTarget }
     */
    eventTarget: EventTarget;
    with: WithFunction;
    from: FromFunction;
};
