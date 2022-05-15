export type Guard<T> = {
  [K in keyof T]: T[K] extends any
    ? T[K] extends never
      ? never
      : T[K] extends string
      ? StringConstructor
      : T[K] extends number
      ? NumberConstructor
      : T[K] extends boolean
      ? BooleanConstructor
      : T[K] extends Array<Guard<T[K]>>
      ? ArrayConstructor
      : T[K] extends object
      ? Guard<T[K]>
      : never
    : never;
};

function isConstructor(o: any): boolean {
  try {
    new o();
    return true;
  } catch {
    return false;
  }
}

export function check<T>(o: any, guard: Guard<T>): boolean {
  if (isConstructor(guard)) {
    return typeof o === typeof (guard as any)();
  }

  for (const k in guard) {
    const sub = guard[k] as any;
    if (o[k] === undefined) return false;

    if (sub instanceof Array) {
      for (const el of o[k]) {
        if (!check(el, sub[0])) return false;
      }
    } else if (!check(o[k], sub)) {
      return false;
    }
  }
  return true;
}
