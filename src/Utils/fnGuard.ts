export const fnGuard: ({}, string?) => any = (obj, fn = null) =>
    'string' === typeof fn
        ? obj[fn] && 'function' === typeof obj[fn] && obj[fn]()
        : 'function' === typeof obj && obj();
