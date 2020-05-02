import test from "tape";

import isObject from "is-true-object";
import reflectUtil from "reflect-util";

test("'reflect-util' properties", t => {
	for (const property of /** @type {Exclude<keyof Reflect, "enumerate" | number | symbol>[]} */
	(Object.getOwnPropertyNames(Reflect))) {
		const exportName = property === "ownKeys" ? "getOwnPropertyKeys" : property;

		t.equal(
			reflectUtil[exportName],
			Reflect[property],
			`Module 'reflect-util' re-exports '${
				property === exportName ? property : `${property}' as '${exportName}`
			}' from global object 'Reflect'`
		);
	}

	t.equal(reflectUtil.isObject, isObject, "Module 'reflect-util' re-exports 'isObject' from module 'is-true-object'");
	// @ts-ignore
	t.equal(reflectUtil[Symbol.toStringTag], "Reflect", "Module 'reflect-util' has correct Symbol.toStringTag value");

	t.end();
});

test("hasOwnProperty", t => {
	t.throws(
		// @ts-ignore
		() => reflectUtil.hasOwnProperty(),
		"'hasOwnProperty()' with 0 arguments throws"
	);
	t.throws(
		// @ts-ignore
		() => reflectUtil.hasOwnProperty(null),
		"'hasOwnProperty()' with 1 argument throws"
	);
	t.throws(
		// @ts-ignore
		() => reflectUtil.hasOwnProperty("foo", undefined),
		"'hasOwnProperty()' with 2 arguments and non-object 'target' throws"
	);

	t.doesNotThrow(
		() => reflectUtil.hasOwnProperty({}, "foo"),
		"'hasOwnProperty()' with 2 arguments and object 'target' works"
	);

	t.end();
});

test("isConstructor", t => {
	const { isConstructor } = reflectUtil;

	const constructorProxyRecord = Proxy.revocable(class {}, {});
	const nonConstructorProxyRecord = Proxy.revocable(() => {}, {});

	const func = function () {};
	const genFunc = function* () {};
	const asyncFunc = async function () {};
	const asyncGenFunc = async function* () {};

	const arrowFunc = () => {};
	const asyncArrowFunc = async () => {};

	t.true(isConstructor(Object), "global 'Object' is a constructor");
	t.true(isConstructor(Proxy), "global 'Proxy' is a constructor");
	t.true(isConstructor(func), "function is a constructor");
	t.true(isConstructor(func.bind(null)), "bound function is a constructor");
	t.true(isConstructor(class {}), "class is a constructor");
	t.true(isConstructor(class {}.bind(null)), "bound class is a constructor");
	t.true(isConstructor(new Proxy(class {}, {})), "Proxy around class is a constructor");
	t.true(isConstructor(constructorProxyRecord.proxy), "revocable Proxy around class is a constructor");
	constructorProxyRecord.revoke();
	t.true(isConstructor(constructorProxyRecord.proxy), "revoked Proxy around class is a constructor");

	t.false(isConstructor(Math.abs), "built-in methods are not constructors");
	t.false(isConstructor(genFunc), "generator function is not a constructor");
	t.false(isConstructor(genFunc.bind(null)), "bound generator function is not a constructor");
	t.false(isConstructor(asyncFunc), "async function is not a constructor");
	t.false(isConstructor(asyncFunc.bind(null)), "bound async function is not a constructor");
	t.false(isConstructor(asyncGenFunc), "async generator function is not a constructor");
	t.false(isConstructor(asyncGenFunc.bind(null)), "bound async generator function is not a constructor");
	t.false(isConstructor(arrowFunc), "arrow function is not a constructor");
	t.false(isConstructor(arrowFunc.bind(null)), "bound arrow function is not a constructor");
	t.false(isConstructor(asyncArrowFunc), "async arrow function is not a constructor");
	t.false(isConstructor(asyncArrowFunc.bind(null)), "bound async arrow function is not a constructor");
	t.false(isConstructor({ method() {} }.method), "method literal is not a constructor");
	t.false(isConstructor(1n), "bigint is not a constructor");
	t.false(isConstructor(true), "true is not a constructor");
	t.false(isConstructor(false), "false is not a constructor");
	t.false(isConstructor(null), "null is not a constructor");
	t.false(isConstructor(undefined), "undefined is not a constructor");
	t.false(isConstructor(1), "number is not a constructor");
	t.false(isConstructor({}), "object is not a constructor");
	t.false(isConstructor(""), "string is not a constructor");
	t.false(isConstructor(Symbol()), "symbol is not a constructor");
	t.false(isConstructor(new Proxy({}, {})), "Proxy around object is not a constructor");
	t.false(
		isConstructor(nonConstructorProxyRecord.proxy),
		"revocable Proxy around arrow function is not a constructor"
	);
	nonConstructorProxyRecord.revoke();
	t.false(isConstructor(nonConstructorProxyRecord.proxy), "revoked Proxy around arrow function is not a constructor");

	t.end();
});
