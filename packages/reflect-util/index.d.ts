import isObject = require("is-true-object");
import {
	BindApplyFallbackParameters,
	BindCallFallbackParameters,
	InferApplyArgs,
	InferConstructArgs,
	InstanceType,
	LoosePropertyKey,
	Parameters,
	ReturnType,
	StrictPropertyKey,
	ToApplyArgs,
} from "./primordials.cjs";

export { isObject };

/**
 * Calls the function with the specified object as the this value and the elements of specified array as the arguments.
 *
 * @param target The function to call.
 * @param thisArg The object to be used as the this object.
 * @param args An array of argument values to be passed to the function.
 *
 * @throws {TypeError} If `target` isn't a function or `args` isn't a valid array-like.
 */
export declare function apply<T, A extends unknown[], R>(
	target: (this: T, ...args: A) => R,
	thisArg: T,
	args: ToApplyArgs<A>,
): R;
export declare function apply<F extends Function>(
	target: F,
	thisArg: ThisParameterType<F>,
	args: InferApplyArgs<F>,
): ReturnType<F>;

/**
 * Calls the function with the specified object as the this value and the specified rest arguments as the arguments.
 *
 * @param target The function to call.
 * @param thisArg The object to be used as the this object.
 * @param args Argument values to be passed to the function.
 *
 * @throws {TypeError} If `target` isn't a function.
 */
export declare function call<T, A extends unknown[], R>(target: (this: T, ...args: A) => R, thisArg: T, ...args: A): R;
export declare function call<F extends Function>(
	target: F,
	thisArg: ThisParameterType<F>,
	...args: Parameters<F>
): ReturnType<F>;


/**
 * For a given function, creates a bound function that has the same body as the original function.
 * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
 *
 * Equivalent to:
 * ```js
 * Function.prototype.call.bind(target, ...)
 * ```
 *
 * @param target
 * @param args
 *
 * @throws {TypeError} If `target` isn't a function.
 */
// prettier-ignore
export declare function bindCall<T, A extends unknown[], R>(
	target: (this: T, ...args: A) => R,
): (thisArg: T, ...args: A) => R;
// prettier-ignore
export declare function bindCall<T, A extends unknown[], R>(
	target: (this: T, ...args: A) => R,
	thisArg: T,
): (...args: A) => R;
export declare function bindCall<T, A0, A extends unknown[], R>(
	target: (this: T, arg0: A0, ...args: A) => R,
	thisArg: T,
	arg0: A0,
): (...args: A) => R;
export declare function bindCall<T, A0, A1, A extends unknown[], R>(
	target: (this: T, arg0: A0, arg1: A1, ...args: A) => R,
	thisArg: T,
	arg0: A0,
	arg1: A1,
): (...args: A) => R;
export declare function bindCall<T, A0, A1, A2, A extends unknown[], R>(
	target: (this: T, arg0: A0, arg1: A1, arg2: A2, ...args: A) => R,
	thisArg: T,
	arg0: A0,
	arg1: A1,
	arg2: A2,
): (...args: A) => R;
export declare function bindCall<T, A0, A1, A2, A3, A extends unknown[], R>(
	target: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R,
	thisArg: T,
	arg0: A0,
	arg1: A1,
	arg2: A2,
	arg3: A3,
): (...args: A) => R;
export declare function bindCall<T, AX, R>(
	target: (this: T, ...args: AX[]) => R,
	thisArg: T,
	...args: AX[]
): (...args: AX[]) => R;

export declare function bindCall<F extends Function>(
	target: F,
): (thisArg: ThisParameterType<F>, ...args: Parameters<F>) => ReturnType<F>;
export declare function bindCall<F extends Function>(
	target: F,
	thisArg: ThisParameterType<F>,
): (...args: Parameters<F>) => ReturnType<F>;
export declare function bindCall<F extends Function>(
	target: F,
	thisArg: ThisParameterType<F>,
	...args: BindCallFallbackParameters<F>
): (...args: BindCallFallbackParameters<F>) => ReturnType<F>;

/**
 * For a given function, creates a bound function that has the same body as the original function.
 * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
 *
 * Equivalent to:
 * ```js
 * Function.prototype.apply.bind(target, ...)
 * ```
 *
 * @param target
 * @param args
 *
 * @throws {TypeError} If `target` isn't a function.
 */
export declare function bindApply<T, A extends unknown[], R>(
	target: (this: T, ...args: A) => R,
): (thisArg: T, args: ToApplyArgs<A>) => R;
export declare function bindApply<T, A extends unknown[], R>(
	target: (this: T, ...args: A) => R,
	thisArg: T,
): (args: ToApplyArgs<A>) => R;
export declare function bindApply<T, A0, A extends unknown[], R>(
	target: (this: T, arg0: A0, ...args: A) => R,
	thisArg: T,
	arg0: A0,
): (args: ToApplyArgs<A>) => R;
export declare function bindApply<T, A0, A1, A extends unknown[], R>(
	target: (this: T, arg0: A0, arg1: A1, ...args: A) => R,
	thisArg: T,
	arg0: A0,
	arg1: A1,
): (args: ToApplyArgs<A>) => R;
export declare function bindApply<T, A0, A1, A2, A extends unknown[], R>(
	target: (this: T, arg0: A0, arg1: A1, arg2: A2, ...args: A) => R,
	thisArg: T,
	arg0: A0,
	arg1: A1,
	arg2: A2,
): (args: ToApplyArgs<A>) => R;
export declare function bindApply<T, A0, A1, A2, A3, A extends unknown[], R>(
	target: (this: T, arg0: A0, arg1: A1, arg2: A2, arg3: A3, ...args: A) => R,
	thisArg: T,
	arg0: A0,
	arg1: A1,
	arg2: A2,
	arg3: A3,
): (args: ToApplyArgs<A>) => R;

export declare function bindApply<T, AX, R>(
	target: (this: T, ...args: AX[]) => R,
	thisArg: T,
	...args: AX[]
): (args: ArrayLike<AX>) => R;

export declare function bindApply<F extends Function>(
	target: F,
): (thisArg: ThisParameterType<F>, args: InferApplyArgs<F>) => ReturnType<F>;
export declare function bindApply<F extends Function>(
	target: F,
	thisArg: ThisParameterType<F>,
): (args: InferApplyArgs<F>) => ReturnType<F>;
// prettier-ignore
export declare function bindApply<F extends Function>(
	target: F,
	thisArg: ThisParameterType<F>,
	...args: BindCallFallbackParameters<F>
): (args: BindApplyFallbackParameters<F>) => ReturnType<F>;

/**
 * Constructs the target with the elements of specified array as the arguments and the specified constructor as the `new.target` value.
 *
 * @param target The function to call.
 * @param args An array of argument values to be passed to the function.
 * @param newTarget The constructor to be used as the `new.target` object.
 *
 * @throws {TypeError} If `target` isn't a constructor, `args` isn't a valid array-like
 *         or `newTarget` is present and isn't a constructor.
 */
export declare function construct<A extends unknown[], R>(
	target: new (...args: A) => any,
	args: ToApplyArgs<A>,
	newTarget: new (...args: any) => R,
): R;
export declare function construct<A extends unknown[], R>(
	target: new (...args: A) => R,
	args: ToApplyArgs<A>,
	newTarget?: undefined,
): R;

export declare function construct<T extends Function, N extends Function>(
	target: T,
	args: InferConstructArgs<T>,
	newTarget: N,
): InstanceType<N>;
export declare function construct<T extends Function>(
	target: T,
	args: InferConstructArgs<T>,
	newTarget?: unknown,
): InstanceType<T>;

/**
 * Adds a property to an object, or modifies attributes of an existing property.
 *
 * @param target Object on which to add or modify the property. This can be a native JavaScript object
 *        (that is, a user-defined object or a built in object) or a DOM object.
 * @param propertyKey The property name.
 * @param attributes Descriptor for the property. It can be for a data property or an accessor property.
 *
 * @throws {TypeError} If `target` isn't an object.
 */
export declare function defineProperty<T extends object, P extends LoosePropertyKey>(
	target: T,
	propertyKey: P,
	attributes: P extends keyof T ? TypedPropertyDescriptor<T[P]> : PropertyDescriptor,
): boolean;
export declare function defineProperty(
	target: object,
	propertyKey: LoosePropertyKey,
	attributes: PropertyDescriptor,
): boolean;

/**
 * Removes a property from an object, equivalent to `delete target[propertyKey]`,
 * except it won't throw if `target[propertyKey]` is non-configurable.
 *
 * @param target Object from which to remove the own property.
 * @param propertyKey The property name.
 *
 * @throws {TypeError} If `target` isn't an object.
 */
export declare function deleteProperty(target: object, propertyKey: LoosePropertyKey): boolean;

/**
 * Adds one or more properties to an object, and/or modifies attributes of existing properties.
 *
 * @param target Object on which to add or modify the properties.
 *        This can be a native JavaScript object or a DOM object.
 * @param propertyAttributeMap JavaScript object that contains one or more descriptor objects.
 *        Each descriptor object describes a data property or an accessor property.
 *
 * @return Whether setting all properties was successful.
 *
 * @throws {TypeError} If either argument isn't an object.
 */
export declare function defineProperties(
	target: object,
	propertyAttributeMap: Partial<PropertyDescriptorMap> & ThisType<any>,
): boolean;

/**
 * Gets the property of target, equivalent to `target[propertyKey]` when `receiver === target`.
 *
 * @param target Object that contains the property on itself or in its prototype chain.
 * @param propertyKey The property name.
 * @param receiver The reference to use as the `this` value in the getter function,
 *        if `target[propertyKey]` is an accessor property, defaults to `target`.
 *
 * @throws {TypeError} If `target` isn't an object.
 */
export declare function get<T extends object, P extends LoosePropertyKey>(
	target: T,
	propertyKey: P,
	receiver?: any,
): P extends keyof T ? T[P] : any;

/**
 * Gets the own property of target, equivalent to `target[propertyKey]`
 * when `hasOwnProperty(target, propertyKey) === true`.
 *
 * @param target Object that contains the property on itself.
 * @param propertyKey The property name.
 * @param receiver The reference to use as the `this` value in the getter function,
 *        if `target[propertyKey]` is an accessor property, defaults to `target`.
 *
 * @throws {TypeError} If `target` isn't an object.
 */
export declare function getOwnPropertyValue<T extends object, P extends LoosePropertyKey>(
	target: T,
	propertyKey: P,
	receiver?: any,
): P extends keyof T ? T[P] | undefined : any;

/**
 * Gets the own property descriptor of the specified object.
 * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.
 *
 * @param target Object that contains the property.
 * @param propertyKey The property name.
 *
 * @throws {TypeError} If `target` isn't an object.
 */
export declare function getOwnPropertyDescriptor<T extends object, P extends LoosePropertyKey>(
	target: T,
	property: P,
): (P extends keyof T ? TypedPropertyDescriptor<T[P]> : PropertyDescriptor) | undefined;

/**
 * Gets the own property descriptors of the specified object.
 * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.
 *
 * @param target Object that contains the properties.
 *
 * @throws {TypeError} If `target` isn't an object.
 */
// prettier-ignore
export declare function getOwnPropertyDescriptors<T extends object>(
	target: T,
): PropertyDescriptorMap & {
	-readonly [P in keyof T]: TypedPropertyDescriptor<T[P]>;
};

/**
 * Returns the keys of the own properties of an object. The own properties of an object are those that are defined directly
 * on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.
 *
 * @param target Object that contains the own properties.
 *
 * @throws {TypeError} If `target` isn't an object.
 */
export declare function getOwnPropertyKeys<T extends object>(target: T): Extract<keyof T, StrictPropertyKey>[];

/**
 * Returns the string keys of the own properties of an object. The own properties of an object are those that are defined directly
 * on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.
 *
 * @param target Object that contains the own properties.
 *
 * @throws {TypeError} If `target` isn't an object.
 */
export declare function getOwnPropertyNames<T extends object>(target: T): Extract<keyof T, string>[];

/**
 * Returns the symbol keys of the own properties of an object. The own properties of an object are those that are defined directly
 * on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.
 *
 * @param target Object that contains the own properties.
 *
 * @throws {TypeError} If `target` isn't an object.
 */
export declare function getOwnPropertySymbols<T extends object>(target: T): Extract<keyof T, symbol>[];

/**
 * Gets the possibly inherited property descriptor of the specified object.
 *
 * @param target Object that contains the property on itself or in its prototype chain.
 * @param propertyKey The property name.
 *
 * @throws {TypeError} If `target` isn't an object.
 */
export declare function getInheritedPropertyDescriptor<T extends object, P extends LoosePropertyKey>(
	target: T,
	property: P,
): P extends keyof T
	? T[P] extends undefined
		? TypedPropertyDescriptor<T[P]> | undefined
		: TypedPropertyDescriptor<T[P]>
	: PropertyDescriptor | undefined;

/**
 * Returns the prototype of an object.
 *
 * @param target The object that references the prototype.
 *
 * @throws {TypeError} If `target` isn't an object.
 */
export declare function getPrototypeOf<P extends object | null = any>(target: object): P;

/**
 * Equivalent to `propertyKey in target`.
 *
 * @param target Object that contains the property on itself or in its prototype chain.
 * @param propertyKey Name of the property.
 *
 * @throws {TypeError} If `target` isn't an object.
 */
export declare function has(target: object, propertyKey: LoosePropertyKey): boolean;

/**
 * Determines whether an object has a property with the specified name.
 *
 * @param target Object that contains the property.
 * @param propertyKey A property name.
 *
 * @throws {TypeError} If `target` isn't an object.
 */
export declare function hasOwnProperty(target: object, propertyKey: LoosePropertyKey): boolean;

/**
 * Determines whether an object has the `[[Construct]]` internal method.
 *
 * @param target
 */
export declare function isConstructor(target: unknown): target is new (...args: any) => any;

/**
 * Returns a value that indicates whether new properties can be added to an object.
 *
 * @param target Object to test.
 *
 * @throws {TypeError} If `target` isn't an object.
 */
export declare function isExtensible(target: object): boolean;

/**
 * Determines whether an object exists in another object's prototype chain.
 *
 * @param proto The object to search for in `target`'s prototype chain.
 * @param target Another object whose prototype chain is to be checked.
 *
 * @return Whether `proto` exists in `target`'s prototype chain.
 *
 * @throws {TypeError} If `proto` isn't an object.
 */
export declare function isPrototypeOf(proto: object, target: object): boolean;

/**
 * Returns true if the values are the same value, false otherwise.
 *
 * Unlike `===`, `isSameValue` treats `NaN` values as equal.
 *
 * @param value1 The first value.
 * @param value2 The second value.
 */
export declare function isSameValue(value1: any, value2: any): boolean;

/**
 * Prevents the addition of new properties to an object.
 *
 * @param target Object to make non-extensible.
 * @return Whether the object has been made non-extensible.
 */
export declare function preventExtensions(target: object): boolean;

/**
 * Sets the property of target, equivalent to `target[propertyKey] = value` when `receiver === target`.
 *
 * @param target Object that contains the property on itself or in its prototype chain.
 * @param propertyKey Name of the property.
 * @param receiver The reference to use as the `this` value in the setter function,
 *        if `target[propertyKey]` is an accessor property, defaults to `target`.
 */
export declare function set<T extends object, P extends LoosePropertyKey>(
	target: T,
	propertyKey: P,
	value: P extends keyof T ? T[P] : any,
	receiver?: any,
): boolean;

/**
 * Sets the prototype of a specified object o to object proto or null.
 *
 * @param target The object to change its prototype.
 * @param proto The value of the new prototype or null.
 * @return Whether setting the prototype was successful.
 */
export declare function setPrototypeOf(target: object, proto: object | null): boolean;
