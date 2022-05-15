"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var aGuard = {
    i: Number,
    s: String,
};
var bGuard = {
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
var a = {
    s: "s",
    i: 112,
};
var b = {
    i: 1,
    s: "dsad",
    a: a,
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
console.log((0, _1.check)(b, bGuard)); //true
console.log((0, _1.check)(a, aGuard)); //true
console.log((0, _1.check)(b, __assign(__assign({}, aGuard), bGuard))); //true
delete b.a;
console.log((0, _1.check)(b, bGuard)); //false
console.log((0, _1.check)(a, aGuard)); //true
console.log((0, _1.check)(b, __assign(__assign({}, aGuard), bGuard))); //false
