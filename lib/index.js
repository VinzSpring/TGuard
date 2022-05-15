"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = void 0;
function isConstructor(o) {
    try {
        new o();
        return true;
    }
    catch (_a) {
        return false;
    }
}
function check(o, guard) {
    if (isConstructor(guard)) {
        return typeof o === typeof guard();
    }
    for (var k in guard) {
        var sub = guard[k];
        if (o[k] === undefined)
            return false;
        if (sub instanceof Array) {
            for (var _i = 0, _a = o[k]; _i < _a.length; _i++) {
                var el = _a[_i];
                if (!check(el, sub[0]))
                    return false;
            }
        }
        else if (!check(o[k], sub)) {
            return false;
        }
    }
    return true;
}
exports.check = check;
