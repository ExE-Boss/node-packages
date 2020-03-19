"use strict";

/** @type {(target: any) => object} */
const boundValueOf = Function.prototype.call.bind(Object.prototype.valueOf);

/** @param {unknown} target @return {target is object} */
const isObject = target => {
	if (target === null || target === undefined) {
		return false;
	}

	switch (typeof target) {
		// Short-circuit for known primitive types:
		case "boolean":
		case "number":
		case "string":
		case "symbol":
		case "bigint":
			return false;

		case "object":
		case "function":
			return true;
		case "undefined":
		default:
			// Per ES2019 and older spec, typeof returns an implemention-defined value that is not any of the existing
			// ones for uncallable non-standard exotic objects. This is only known to be used in old IE.

			// This will also be hit for objects with the `[[IsHTMLDDA]]` internal slot,
			// which causes typeof to return "undefined".
			try {
				// %ObjProto_valueOf% acts an identity function for real objects,
				// but will box primitive values.
				return boundValueOf(target) === target;
			} catch (_) {
				/* Ignore */
			}
	}

	return false;
};

module.exports = exports = isObject;
