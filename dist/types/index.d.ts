export var __esModule: boolean;
export function dispatch(...t: any[]): {
    eventNames: any[];
    with(e: any, r?: {}): void;
    eventTarget: Window & typeof globalThis;
    from(e: any): {
        eventTarget: Window & typeof globalThis;
        from(e: any): any;
    };
};
export function receive(...t: any[]): {
    eventNames: any[];
    then(e: any, r: any): () => void;
    eventTarget: Window & typeof globalThis;
    from(e: any): {
        eventTarget: Window & typeof globalThis;
        from(e: any): any;
    };
};
//# sourceMappingURL=index.d.ts.map