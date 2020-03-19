/**
 * Returns `true` if target is a real non-`null` object, including objects
 * with the `[[IsHTMLDDA]]` internal slot, such as `HTMLAllCollection`,
 * which makes `typeof` return `undefined`.
 *
 * @return Whether the target is a real object.
 *
 * @example
 * ```js
 * isObject(undefined); // false
 * isObject(null); // false
 * isObject("string"); // false
 * isObject(123); // false
 * isObject(123n); // false
 * isObject(true); // false
 * isObject(false); // false
 * isObject(Symbol.iterator); // false
 *
 * isObject({}); // true
 * isObject(() => {}); // true
 *
 * // in browsers:
 * isObject(document.all); // true
 * ```
 */
declare function isObject(target: unknown): target is object;
export = isObject;
