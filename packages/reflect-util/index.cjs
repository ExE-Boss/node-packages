"use strict";

const isObject = require("is-true-object");
const {
	undefined,
	Object_create,
	Object_definePropertiesOrThrow,
	Object_getOwnPropertyDescriptors,
	Object_getOwnPropertyNames,
	Object_getOwnPropertySymbols,
	Object_is,
	ObjProto_hasOwnProperty,
	ObjProto_isPrototypeOf,
	FuncProto_apply,
	FuncProto_bind,
	FuncProto_call,
	Math_max,
	Symbol,
	Symbol_toStringTag,
	Reflect_apply: apply,
	Reflect_construct: construct,
	Reflect_defineProperty: defineProperty,
	Reflect_deleteProperty: deleteProperty,
	Reflect_get: get,
	Reflect_getOwnPropertyDescriptor: getOwnPropertyDescriptor,
	Reflect_getOwnPropertyKeys: getOwnPropertyKeys,
	Reflect_getPrototypeOf: getPrototypeOf,
	Reflect_has: has,
	Reflect_isExtensible: isExtensible,
	Reflect_preventExtensions: preventExtensions,
	Reflect_set: set,
	Reflect_setPrototypeOf: setPrototypeOf,
	TypeError,
} = require("./primordials.cjs");

/** @typedef {NonNullable<Parameters<typeof Object_create>[0]>} obj */
/** @type {(target: unknown, options?: { context?: string }) => asserts target is obj} */
const assertObject = (target, { context = "The provided value" } = {}) => {
	if (!isObject(target)) {
		throw new TypeError(`${context} is not an object.`);
	}
};

/**
 * @template T
 * @template {readonly unknown[]} A
 * @template R
 *
 * @param {(this: T, ...args: A) => R} target
 * @param {T} thisArg
 * @param {A} args
 *
 * @return {R}
 * @type {typeof import("./index").call}
 */
const call = (target, thisArg, ...args) => apply(target, thisArg, args);

/**
 * @param {Function} target
 * @param {Function} F
 */
const boundSetFunctionProperties = (target, F, argsLength = -1, L = 1, prefix = "") => {
	if (hasOwnProperty(target, "length")) {
		let targetLen = target.length;
		if (typeof targetLen === "number") {
			targetLen |= 0;
			L = Math_max(L, targetLen - argsLength);
		}
	}
	defineProperty(F, "length", { value: L });

	let targetName = target.name;
	if (typeof targetName !== "string") {
		targetName = "";
	}
	defineProperty(F, "name", { value: `${prefix}${targetName}` });

	return F;
};

const { bindApply, bindCall, hasOwnProperty, isPrototypeOf } = {
	/**
	 * @template {Function} F
	 * @param {F} target
	 * @param {ThisParameterType<F>} [thisArg]
	 * @param {(Parameters<F>[number])[]} args
	 */
	bindApply(target, thisArg, ...args) {
		const F = apply(FuncProto_bind, FuncProto_apply, arguments);

		let argsLength = -1;
		let L = 1;
		let prefix = "";
		if (arguments.length > 1) {
			argsLength = args.length;
			L = 0;
			prefix = "bound ";
		}

		boundSetFunctionProperties(target, F, argsLength, L, prefix);
		return F;
	},

	/**
	 * @template {Function} F
	 * @param {F} target
	 * @param {ThisParameterType<F>} [thisArg]
	 * @param {(Parameters<F>[number])[]} args
	 */
	bindCall(target, thisArg, ...args) {
		if (arguments.length < 2) {
			const F = call(FuncProto_bind, FuncProto_call, target);
			boundSetFunctionProperties(target, F);
			return F;
		}

		return call(FuncProto_bind, target, thisArg, ...args);
	},

	/** @type {typeof import("./index").hasOwnProperty} */
	hasOwnProperty(target, propertyKey, ...args) {
		if (arguments.length < 2) {
			// prettier-ignore
			throw new TypeError(`Failed to execute 'hasOwnProperty': 2 arguments required, but only ${arguments.length} present.'`);
		}
		assertObject(target, { context: "Failed to execute 'hasOwnProperty': Parameter 1" });

		return call(ObjProto_hasOwnProperty, target, propertyKey, ...args);
	},

	/** @type {typeof import("./index").isPrototypeOf} */
	isPrototypeOf(proto, target, ...args) {
		if (arguments.length < 2) {
			// prettier-ignore
			throw new TypeError(`Failed to execute 'isPrototypeOf': 2 arguments required, but only ${arguments.length} present.'`);
		}
		assertObject(proto, { context: "Failed to execute 'isPrototypeOf': Parameter 1" });

		return call(ObjProto_isPrototypeOf, proto, target, ...args);
	},
};

/** @type {typeof import("./index").defineProperties} */
const defineProperties = (target, propertyAttributeMap) => {
	assertObject(target, { context: "Failed to execute 'defineProperties': Parameter 1" });
	assertObject(propertyAttributeMap, { context: "Failed to execute 'defineProperties': Parameter 2" });
	try {
		Object_definePropertiesOrThrow(target, propertyAttributeMap);
		return true;
	} catch (_) {
		return false;
	}
};

setPrototypeOf(exports, null);
defineProperty(exports, Symbol_toStringTag, { value: "Reflect", configurable: true });

exports.apply = apply;
exports.bindApply = bindApply;
exports.bindCall = bindCall;
exports.call = call;
exports.construct = construct;

exports.defineProperties = defineProperties;
exports.defineProperty = defineProperty;
exports.deleteProperty = deleteProperty;

exports.get = get;

/** @return {*} @type {typeof import("./index").getInheritedPropertyDescriptor} */
exports.getInheritedPropertyDescriptor = (target, propertyKey) => {
	assertObject(target, { context: "Failed to execute 'getInheritedPropertyDescriptor': Parameter 1" });

	let desc;
	while (
		(desc = getOwnPropertyDescriptor(target, propertyKey)) === undefined &&
		(target = getPrototypeOf(target)) !== null
	) {}

	return desc;
};

exports.getOwnPropertyDescriptor = getOwnPropertyDescriptor;

/** @return {*} @type {typeof import("./index").getOwnPropertyDescriptors} */
exports.getOwnPropertyDescriptors = (target, ...args) => {
	assertObject(target, { context: "Failed to execute 'getOwnPropertyDescriptors': Parameter 1" });
	return Object_getOwnPropertyDescriptors(target, ...args);
};

exports.getOwnPropertyKeys = getOwnPropertyKeys;

/** @return {*[]} @type {typeof import("./index").getOwnPropertyNames} */
exports.getOwnPropertyNames = (target, ...args) => {
	assertObject(target, { context: "Failed to execute 'getOwnPropertyNames': Parameter 1" });
	return Object_getOwnPropertyNames(target, ...args);
};

/** @return {*[]} @type {typeof import("./index").getOwnPropertySymbols} */
exports.getOwnPropertySymbols = (target, ...args) => {
	assertObject(target, { context: "Failed to execute 'getOwnPropertySymbols': Parameter 1" });
	return Object_getOwnPropertySymbols(target, ...args);
};

/** @type {typeof import("./index").getOwnPropertyValue} */
exports.getOwnPropertyValue = (target, propertyKey, ...args) => {
	assertObject(target, { context: "Failed to execute 'getOwnPropertyValue': Parameter 1" });
	const desc = getOwnPropertyDescriptor(target, propertyKey);
	const receiver = args.length === 0 ? target : args[0];

	if (desc === undefined) {
		return undefined;
	}

	if (hasOwnProperty(desc, "value")) {
		return desc.value;
	}

	const { get } = desc;
	if (typeof get === "function") {
		return call(get, receiver);
	}

	return undefined;
};

exports.getPrototypeOf = getPrototypeOf;

exports.has = has;
exports.hasOwnProperty = hasOwnProperty;

exports.isConstructor = (() => {
	const IS_CONSTRUCTOR = Symbol();
	/** @type {{ readonly length: never }} */
	const BAD_ARRAY_LIKE = Object_create(null, {
		length: {
			enumerable: true,
			get() {
				throw IS_CONSTRUCTOR;
			},
		},
	});
	preventExtensions(BAD_ARRAY_LIKE);

	/** @param {Function} target @type {typeof import("./index").isConstructor} */
	const isConstructor = target => {
		try {
			construct(target, BAD_ARRAY_LIKE);
		} catch (err) {
			return err === IS_CONSTRUCTOR;
		}
	};
	return isConstructor;
})();

exports.isExtensible = isExtensible;
exports.isObject = isObject;
exports.isPrototypeOf = isPrototypeOf;
exports.isSameValue = Object_is;

exports.preventExtensions = preventExtensions;
exports.set = set;
exports.setPrototypeOf = setPrototypeOf;
