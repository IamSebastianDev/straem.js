/** @format */
/**
 *
 * @param  {...string} eventNames
 */
export function dispatch(...eventNames: string[]): {
    eventNames: string[];
    with(payload: any, eventInit?: {}): void;
    eventTarget: Window & typeof globalThis;
    from(target: any): {
        eventTarget: Window & typeof globalThis;
        from(target: any): any;
    };
};
/** @format */
export function receive(...eventNames: any[]): {
    eventNames: any[];
    then(callback: any, options: any): () => void;
    eventTarget: Window & typeof globalThis;
    from(target: any): {
        eventTarget: Window & typeof globalThis;
        from(target: any): any;
    };
};
//# sourceMappingURL=index.esm.d.ts.map