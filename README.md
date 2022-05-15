# t-guardian

t-guardian is a simple yet powerful tool that lets you create Typeguards in a more readable way.

t-guardian is compatible with the latest versions of TypeScript and supports all Typescript features.

With t-guardian, you can create Array typeguards, Object typeguards, Intersection-, and Union-typeguards.

To install the library, run the following command:

```> npm install t-guardian```

Check the examples below for more information.

```
import { check, Guard } from ".";

interface A {
  i: number;
  s: string;
}

type B = {
  i: number;
  s: string;
  a: A;
  ls: number[];
  xs: A[];
  ts: { [k: string]: number };
};

const aGuard: Guard<A> = {
  i: Number,
  s: String,
};

const bGuard: Guard<B> = {
  i: Number,
  s: String,
  a: aGuard,
  ls: [Number],
  xs: [
    aGuard,
  ],
  ts: {
    i: Number,
  },
};

const a: any = {
  s: "s",
  i: 112,
};

const b = {
  i: 1,
  s: "dsad",
  a,
  ls: [1],
  f: 3,
  xs: [
    {
      i: 2,
      s: "audaghszd",
    },
  ],
  ts: {
    i: 1,
  },
};


console.log(check<B>(b, bGuard)); //true
console.log(check<A>(a, aGuard)); //true
console.log(check<B & A>(b, { ...aGuard, ...bGuard })); //true

delete b.a;

console.log(check<B>(b, bGuard)); //false
console.log(check<A>(a, aGuard)); //true
console.log(check<B & A>(b, { ...aGuard, ...bGuard })); //false

```