export const fnGuard: ({}, string?) => any = (obj, fn = null) =>
    fn
        ? obj[fn] && 'function' === typeof obj[fn] && obj[fn]()
        : 'function' === typeof fn && fn();
