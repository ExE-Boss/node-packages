import "tape-catch";
import test from "tape";

import isObject from "is-true-object";
import documentAll from "./document-all.js";

test("isObject properties", t => {
	const {
		length: isObject_length,
		name: isObject_name,
		prototype: isObject_prototype,
	} = Object.getOwnPropertyDescriptors(isObject);

	t.notEqual(isObject_length, undefined, "isObject has own length property");
	t.equal(isObject_length.value, 1, "isObject has correct length");

	t.notEqual(isObject_name, undefined, "isObject has own name property");
	t.equal(isObject_name.value, "isObject", "isObject has correct name");

	t.equal(isObject_prototype, undefined, "isObject has no own prototype property");
	t.end();
});

test("isObject", t => {
	const equal = t.equal.bind(t);
	const skip = t.skip.bind(t);

	const primitives = [
		undefined,
		null,
		"string",
		123,
		123n,
		true,
		false,
		Symbol.iterator,
	];

	for (const primitive of primitives) {
		t.equal(
			isObject(primitive),
			false,
			`should return false for ${primitive === null ? "null" : typeof primitive}`,
		);
	}

	t.equal(isObject({}), true, "should return true for object");

	// prettier-ignore
	t.equal(isObject(() => {}), true, "should return true for function");

	const equalHTMLDDA = documentAll !== false ? equal : skip;
	equalHTMLDDA(isObject(documentAll), true, "should return true for document.all");

	t.end();
});
