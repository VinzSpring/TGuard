export declare type Guard<T> = {
    [K in keyof T]: T[K] extends any ? T[K] extends never ? never : T[K] extends string ? StringConstructor : T[K] extends number ? NumberConstructor : T[K] extends boolean ? BooleanConstructor : T[K] extends Array<Guard<T[K]>> ? ArrayConstructor : T[K] extends object ? Guard<T[K]> : never : never;
};
export declare function check<T>(o: any, guard: Guard<T>): boolean;
