`is-true-object`<br/>
[![Build](https://img.shields.io/travis/com/ExE-Boss/node-packages/master)](https://travis-ci.com/ExE-Boss/node-packages)
[![License](https://img.shields.io/github/license/ExE-Boss/node-packages.svg)](https://github.com/ExE-Boss/node-packages/blob/master/packages/is-true-object/LICENSE)
[![npm](https://img.shields.io/npm/v/is-true-object.svg)](https://www.npmjs.com/package/is-true-object)
================

Returns `true` if target is a real non-`null` object, including objects with the `[[IsHTMLDDA]]` internal slot, such as `HTMLAllCollection`, which makes `typeof` return `undefined`.

```js
import isObject from "is-real-object";

isObject(undefined); // false
isObject(null); // false
isObject("string"); // false
isObject(123); // false
isObject(123n); // false
isObject(true); // false
isObject(false); // false
isObject(Symbol.iterator); // false

isObject({}); // true
isObject(() => {}); // true

// in browsers:
isObject(document.all); // true
```
