/** @format */

import type { ThenFunction } from './ThenFunction';
import type { FromFunction } from './FromFunction';

export type Receiver = {
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
    from: FromFunction;
    then: ThenFunction;
};
