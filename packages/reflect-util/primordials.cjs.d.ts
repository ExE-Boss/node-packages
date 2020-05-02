export type StrictPropertyKey = string | symbol;
export type LoosePropertyKey = string | number | symbol;

export type ToApplyArgs<A extends ArrayLike<any>> =
	| { readonly [K in keyof A & (number | "length")]: A[K] }
	| ArrayLike<unknown>;

export type InferApplyArgs<F extends Function> = F extends (...args: infer A) => any
	? ToApplyArgs<A>
	: ArrayLike<unknown>;

export type InferConstructArgs<F extends Function> = F extends new (...args: infer A) => any
	? ToApplyArgs<A>
	: ArrayLike<unknown>;

/** Obtain the parameters of a callable function type */
export type Parameters<F extends Function> = F extends (...args: infer A) => any ? A : unknown[];

/** Obtain the parameters of a constructor function type */
export type ConstructorParameters<F extends Function> = F extends new (...args: infer A) => any ? A : unknown[];

/** Obtain the return type of a callable function type */
export type ReturnType<F extends Function> = F extends (...args: any) => infer R ? R : any;

/** Obtain the return type of a constructor function type */
export type InstanceType<F extends Function> = F extends new (...args: any) => infer R ? R : any;

export type BindCallFallbackParameters<F extends Function> = Parameters<F> extends (infer I)[] ? I[] : unknown[];
// prettier-ignore
export type BindApplyFallbackParameters<F extends Function> = Parameters<F> extends (infer I)[] ? ArrayLike<I> : ArrayLike<unknown>;

export declare const undefined: undefined;

//#region Object
import Object = globalThis.Object;
export { Object };

/**
 * Copy the values of all of the enumerable own properties from one or more source objects
 * to a target object. Returns the target object.
 *
 * @param target The target object to copy to.
 * @param sources One or more source objects from which to copy properties
 */
export declare function Object_assign<T extends object>(target: T): T;
export declare function Object_assign<T extends object, U extends object>(
	target: T,
	source1: U | undefined | null,
): T & U;
export declare function Object_assign<T extends object, U extends object, V extends object>(
	target: T,
	source1: U | undefined | null,
	source2: V | undefined | null,
): T & U & V;
export declare function Object_assign<T extends object, U extends object, V extends object, W extends object>(
	target: T,
	source1: U | undefined | null,
	source2: V | undefined | null,
	source3: W | undefined | null,
): T & U & V & W;
export declare function Object_assign(target: object, ...sources: (object | undefined | null)[]): any;

export declare function Object_create<T extends object = {}>(proto: null): T;
export declare function Object_create<T extends object = any>(
	proto: object | null,
	properties?: Partial<PropertyDescriptorMap> & ThisType<any>,
): T;

/**
 * Prevents the addition of new properties to an object.
 * @param target Object to make non-extensible.
 */
export declare function Object_preventExtensionsOrThrow<T>(target: T): T;

/**
 * Prevents the modification of attributes of existing properties, and prevents the addition of new properties.
 * @param target Object on which to lock the attributes.
 */
export declare function Object_sealOrThrow<T>(target: T): T;

/**
 * Prevents the modification of existing property attributes and values, and prevents the addition of new properties.
 * @param target Object on which to lock the attributes.
 */
// prettier-ignore
export declare function Object_freezeOrThrow<T>(
	target: T,
	// Call signatures are currently not preserved by mapped types:
): T extends Function ? T : Readonly<T>;

/**
 * Returns true if the values are the same value, false otherwise.
 *
 * Unlike `===`, `Object.is` treats `NaN` values as equal.
 *
 * @param value1 The first value.
 * @param value2 The second value.
 */
export declare function Object_is(value1: any, value2: any): boolean;

/**
 * Adds one or more properties to an object, and/or modifies attributes of existing properties.
 *
 * @param target Object on which to add or modify the properties.
 *        This can be a native JavaScript object or a DOM object.
 * @param propertyAttributeMap JavaScript object that contains one or more descriptor objects.
 *        Each descriptor object describes a data property or an accessor property.
 *
 * @throws {TypeError} If any of the properties already exists and is non-configurable.
 */
export declare function Object_definePropertiesOrThrow(
	target: object,
	propertyAttributeMap: Partial<PropertyDescriptorMap> & ThisType<any>,
): void;

/**
 * Adds a property to an object, or modifies attributes of an existing property.
 *
 * @param target Object on which to add or modify the property. This can be a native JavaScript object
 *        (that is, a user-defined object or a built in object) or a DOM object.
 * @param propertyKey The property name.
 * @param attributes Descriptor for the property. It can be for a data property or an accessor property.
 *
 * @throws {TypeError} If the property already exists and is non-configurable.
 */
export declare function Object_definePropertyOrThrow<T extends object, P extends PropertyKey>(
	target: T,
	propertyKey: P,
	attributes: P extends keyof T ? TypedPropertyDescriptor<T[P]> : PropertyDescriptor,
): void;
export declare function Object_definePropertyOrThrow(
	target: object,
	propertyKey: PropertyKey,
	attributes: PropertyDescriptor,
): void;

/**
 * Gets the own property descriptors of the specified object.
 * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.
 *
 * @param target Object that contains the properties.
 */
export declare function Object_getOwnPropertyDescriptors<T extends object>(
	target: T,
): {
	-readonly [P in keyof T]: TypedPropertyDescriptor<T[P]>;
} & {
	[property: string]: PropertyDescriptor;
};

export declare function Object_getOwnPropertyNames<T extends object>(target: T): Extract<keyof T, string>[];
export declare function Object_getOwnPropertySymbols<T extends object>(target: T): Extract<keyof T, symbol>[];

/** A reference to the prototype for a class of objects. */
export declare const ObjProto: typeof Object.prototype;

/**
 * Determines whether an object has an own property with the specified name.
 *
 * @this {object} Object that contains the property.
 * @param propertyKey A property name.
 */
export declare function ObjProto_hasOwnProperty(this: object, propertyKey: LoosePropertyKey): boolean;

/**
 * Determines whether an object exists in another object's prototype chain.
 *
 * @this {object} The object to search for in v's prototype chain.
 * @param target Another object whose prototype chain is to be checked.
 */
export declare function ObjProto_isPrototypeOf(this: object, target: object): boolean;
//#endregion

//#region Function
import Function = globalThis.Function;
export { Function };

export declare const FuncProto: typeof Function.prototype;

/**
 * Calls the function with the specified object as the this value
 * and the elements of specified array as the arguments.
 *
 * @param thisArg The object to be used as the this object.
 * @param args An array of argument values to be passed to the function.
 *
 * @throws {TypeError} If this value is not a function.
 */
export declare function FuncProto_apply<T, R>(this: (this: T) => R, thisArg: T): R;
export declare function FuncProto_apply<T, A extends unknown[], R>(
	this: (this: T, ...args: A) => R,
	thisArg: T,
	args: ToApplyArgs<A>,
): R;
export declare function FuncProto_apply<F extends Function>(
	this: F,
	thisArg: ThisParameterType<F>,
	args?: InferApplyArgs<F>,
): ReturnType<F>;

/**
 * Calls the function with the specified object as the this value
 * and the specified rest arguments as the arguments.
 *
 * @param thisArg The object to be used as the this object.
 * @param args Argument values to be passed to the function.
 *
 * @throws {TypeError} If this value is not a function.
 */
export declare function FuncProto_call<T, A extends unknown[], R>(
	this: (this: T, ...args: A) => R,
	thisArg: T,
	...args: A
): R;
export declare function FuncProto_call<F extends Function>(
	this: F,
	thisArg: ThisParameterType<F>,
	...args: Parameters<F>
): ReturnType<F>;

/**
 * For a given function, creates a bound function that has the same body as the original function.
 * The this object of the bound function is associated with the specified object, and has the specified initial parameters.
 *
 * @param thisArg The object to be used as the this object.
 * @param args Arguments to bind to the parameters of the function.
 *
 * @throws {TypeError} If this value is not a function.
 */
export declare function FuncProto_bind(this: Function, thisArg: any, ...args: any[]): (...args: any) => any;

/**
 * Returns a string representation of a function.
 *
 * @throws {TypeError} If this value is not a function.
 */
export declare function FuncProto_toString(this: Function): string;
//#endregion

//#region Symbol
import Symbol = globalThis.Symbol;
export { Symbol };
export declare function Symbol_for(key: string): symbol;
export declare function Symbol_keyFor(sym: symbol): string | undefined;

/**
 * A method that returns the default async iterator for an object.
 *
 * Called by the semantics of the `for-await-of` statement.
 */
export declare const Symbol_asyncIterator: typeof Symbol.asyncIterator;

/**
 * A method that determines if a constructor object recognizes an object as one of the
 * constructor’s instances.
 *
 * Called by the semantics of the `instanceof` operator.
 */
export declare const Symbol_hasInstance: typeof Symbol.hasInstance;

/**
 * A Boolean value that if true indicates that an object should flatten to its array elements
 * by `Array.prototype.concat(...)`.
 */
export declare const Symbol_isConcatSpreadable: typeof Symbol.isConcatSpreadable;

/**
 * A method that returns the default iterator for an object.
 *
 * Called by the semantics of the `for-of` statement.
 */
export declare const Symbol_iterator: typeof Symbol.iterator;

/**
 * A regular expression method that matches the regular expression against a string.
 *
 * Called by the `String.prototype.match(...)` method.
 */
export declare const Symbol_match: typeof Symbol.match;

/**
 * A regular expression method that matches the regular expression against a string.
 *
 * Called by the `String.prototype.matchAll(...)` method.
 */
export declare const Symbol_matchAll: typeof Symbol.matchAll;

/**
 * A regular expression method that replaces matched substrings of a string.
 *
 * Called by the `String.prototype.replace(...)` method.
 */
export declare const Symbol_replace: typeof Symbol.replace;

/**
 * A regular expression method that returns the index within a string that matches the
 * regular expression.
 *
 * Called by the `String.prototype.search(...)` method.
 */
export declare const Symbol_search: typeof Symbol.search;

/**
 * A function valued property that is the constructor function that is used to create
 * derived objects.
 */
export declare const Symbol_species: typeof Symbol.species;

/**
 * A regular expression method that splits a string at the indices that match the regular
 * expression.
 *
 * Called by the `String.prototype.split(...)` method.
 */
export declare const Symbol_split: typeof Symbol.split;

/**
 * A method that converts an object to a corresponding primitive value.
 *
 * Called by the `ToPrimitive(...)` abstract operation.
 */
export declare const Symbol_toPrimitive: typeof Symbol.toPrimitive;

/**
 * A String value that is used in the creation of the default string description of an object.
 *
 * Called by the built-in method `Object.prototype.toString(...)`.
 */
export declare const Symbol_toStringTag: typeof Symbol.toStringTag;

/**
 * An Object whose own property names are property names that are excluded from the `with`
 * environment bindings of the associated objects.
 */
export declare const Symbol_unscopables: typeof Symbol.unscopables;
//#endregion

//#region Error
import Error = globalThis.Error;
import TypeError = globalThis.TypeError;
export { Error, TypeError };
//#endregion

//#region Math
import Math = globalThis.Math;
export { Math };

/** The mathematical constant e. This is Euler's number, the base of natural logarithms. */
export declare const Math_E: 2.718281828459045;
/** The natural logarithm of 10. */
export declare const Math_LN10: 2.302585092994046;
/** The natural logarithm of 2. */
export declare const Math_LN2: 0.6931471805599453;
/** The base-10 logarithm of e. */
export declare const Math_LOG10E: 0.4342944819032518;
/** The base-2 logarithm of e. */
export declare const Math_LOG2E: 1.4426950408889634;
/** Pi. This is the ratio of the circumference of a circle to its diameter. */
export declare const Math_PI: 3.141592653589793;
/** The square root of 0.5, or, equivalently, one divided by the square root of 2. */
export declare const Math_SQRT1_2: 0.7071067811865476;
/** The square root of 2. */
export declare const Math_SQRT2: 1.4142135623730951;

/**
 * Returns the absolute value of a number (the value without regard to whether it is positive or negative).
 * For example, the absolute value of -5 is the same as the absolute value of 5.
 * @param x A numeric expression for which the absolute value is needed.
 */
export declare function Math_abs(x: number): number;

/**
 * Returns the arc cosine (or inverse cosine) of a number.
 * @param x A numeric expression.
 */
export declare function Math_acos(x: number): number;

/**
 * Returns the inverse hyperbolic cosine of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
export declare function Math_acosh(x: number): number;

/**
 * Returns the arcsine of a number.
 * @param x A numeric expression.
 */
export declare function Math_asin(x: number): number;

/**
 * Returns the inverse hyperbolic sine of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
export declare function Math_asinh(x: number): number;

/**
 * Returns the arctangent of a number.
 * @param x A numeric expression for which the arctangent is needed.
 */
export declare function Math_atan(x: number): number;

/**
 * Returns the angle (in radians) from the X axis to a point.
 * @param y A numeric expression representing the cartesian y-coordinate.
 * @param x A numeric expression representing the cartesian x-coordinate.
 */
export declare function Math_atan2(y: number, x: number): number;

/**
 * Returns the inverse hyperbolic tangent of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
export declare function Math_atanh(x: number): number;

/**
 * Returns an implementation-dependent approximation to the cube root of number.
 * @param x A numeric expression.
 */
export declare function Math_cbrt(x: number): number;

/**
 * Returns the cosine of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
export declare function Math_cos(x: number): number;

/**
 * Returns the hyperbolic cosine of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
export declare function Math_cosh(x: number): number;

/**
 * Returns the smallest integer greater than or equal to its numeric argument.
 * @param x A numeric expression.
 */
export declare function Math_ceil(x: number): number;

/**
 * Returns the number of leading zero bits in the 32-bit binary representation of a number.
 * @param x A numeric expression.
 */
export declare function Math_clz32(x: number): number;

/**
 * Returns e (the base of natural logarithms) raised to a power.
 * @param x A numeric expression representing the power of e.
 */
export declare function Math_exp(x: number): number;

/**
 * Returns the result of (e^x - 1), which is an implementation-dependent approximation to
 * subtracting 1 from the exponential function of x (e raised to the power of x, where e
 * is the base of the natural logarithms).
 * @param x A numeric expression.
 */
export declare function Math_expm1(x: number): number;

/**
 * Returns the greatest integer less than or equal to its numeric argument.
 * @param x A numeric expression.
 */
export declare function Math_floor(x: number): number;

/**
 * Returns the nearest single precision float representation of a number.
 * @param x A numeric expression.
 */
export declare function Math_fround(x: number): number;

/**
 * Returns the square root of the sum of squares of its arguments.
 * @param values Values to compute the square root for.
 *     If no arguments are passed, the result is +0.
 *     If there is only one argument, the result is the absolute value.
 *     If any argument is +Infinity or -Infinity, the result is +Infinity.
 *     If any argument is NaN, the result is NaN.
 *     If all arguments are either +0 or −0, the result is +0.
 */
export declare function Math_hypot(...values: number[]): number;

/**
 * Returns the result of 32-bit multiplication of two numbers.
 * @param x First number
 * @param y Second number
 */
export declare function Math_imul(x: number, y: number): number;

/**
 * Returns the natural logarithm (base e) of a number.
 * @param x A numeric expression.
 */
export declare function Math_log(x: number): number;

/**
 * Returns the base 10 logarithm of a number.
 * @param x A numeric expression.
 */
export declare function Math_log10(x: number): number;

/**
 * Returns the natural logarithm of 1 + x.
 * @param x A numeric expression.
 */
export declare function Math_log1p(x: number): number;

/**
 * Returns the base 2 logarithm of a number.
 * @param x A numeric expression.
 */
export declare function Math_log2(x: number): number;

/**
 * Returns the larger of a set of supplied numeric expressions.
 * @param values Numeric expressions to be evaluated.
 */
export declare function Math_max(...values: number[]): number;

/**
 * Returns the smaller of a set of supplied numeric expressions.
 * @param values Numeric expressions to be evaluated.
 */
export declare function Math_min(...values: number[]): number;

/**
 * Returns the value of a base expression taken to a specified power.
 * @param x The base value of the expression.
 * @param y The exponent value of the expression.
 */
export declare function Math_pow(x: number, y: number): number;

/** Returns a pseudorandom number between 0 and 1. */
export declare function Math_random(): number;

/**
 * Returns a supplied numeric expression rounded to the nearest integer.
 * @param x The value to be rounded to the nearest integer.
 */
export declare function Math_round(x: number): number;

/**
 * Returns the sign of the x, indicating whether x is positive, negative or zero.
 * @param x The numeric expression to test
 */
export declare function Math_sign(x: number): number;

/**
 * Returns the sine of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
export declare function Math_sin(x: number): number;

/**
 * Returns the hyperbolic sine of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
export declare function Math_sinh(x: number): number;

/**
 * Returns the square root of a number.
 * @param x A numeric expression.
 */
export declare function Math_sqrt(x: number): number;

/**
 * Returns the tangent of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
export declare function Math_tan(x: number): number;

/**
 * Returns the hyperbolic tangent of a number.
 * @param x A numeric expression that contains an angle measured in radians.
 */
export declare function Math_tanh(x: number): number;

/**
 * Returns the integral part of the a numeric expression, x, removing any fractional digits.
 * If x is already an integer, the result is x.
 * @param x A numeric expression.
 */
export declare function Math_trunc(x: number): number;
//#endregion

//#region Reflect
import Reflect = globalThis.Reflect;
export { Reflect };

/**
 * Calls the function with the specified object as the this value and the elements of the specified array as the arguments.
 *
 * @param target The function to call.
 * @param thisArg The object to be used as the this object.
 * @param args An array of argument values to be passed to the function.
 */
export declare function Reflect_apply<T, A extends readonly unknown[], R>(
	target: (this: T, ...args: A) => R,
	thisArg: T,
	args: ToApplyArgs<A>,
): R;
export declare function Reflect_apply<F extends Function>(
	target: F,
	thisArg: ThisParameterType<F>,
	args: InferApplyArgs<F>,
): ReturnType<F>;

/**
 * Constructs the target with the elements of specified array as the arguments and the specified constructor as the `new.target` value.
 *
 * @param target The function to call.
 * @param argumentsList An array of argument values to be passed to the function.
 * @param newTarget The constructor to be used as the `new.target` object.
 */
export declare function Reflect_construct<A extends readonly unknown[], R>(
	target: new (...args: A) => any,
	args: ToApplyArgs<A>,
	newTarget: new (...args: any) => R,
): R;
export declare function Reflect_construct<A extends readonly unknown[], R>(
	target: new (...args: A) => R,
	args: ToApplyArgs<A>,
	newTarget?: undefined,
): R;

export declare function Reflect_construct<F extends Function, N extends Function>(
	target: F,
	args: InferConstructArgs<F>,
	newTarget: N,
): InstanceType<N>;
export declare function Reflect_construct<F extends Function>(
	target: F,
	args: InferConstructArgs<F>,
	newTarget?: unknown,
): InstanceType<F>;

/**
 * Adds a property to an object, or modifies attributes of an existing property.
 * @param target Object on which to add or modify the property. This can be a native JavaScript object
 *        (that is, a user-defined object or a built in object) or a DOM object.
 * @param propertyKey The property name.
 * @param attributes Descriptor for the property. It can be for a data property or an accessor property.
 */
export declare function Reflect_defineProperty(
	target: object,
	propertyKey: LoosePropertyKey,
	attributes: PropertyDescriptor,
): boolean;

/**
 * Removes a property from an object, equivalent to `delete target[propertyKey]`,
 * except it won't throw if `target[propertyKey]` is non-configurable.
 * @param target Object from which to remove the own property.
 * @param propertyKey The property name.
 */
export declare function Reflect_deleteProperty(target: object, propertyKey: LoosePropertyKey): boolean;

/**
 * Gets the property of target, equivalent to `target[propertyKey]` when `receiver === target`.
 * @param target Object that contains the property on itself or in its prototype chain.
 * @param propertyKey The property name.
 * @param receiver The reference to use as the `this` value in the getter function,
 *        if `target[propertyKey]` is an accessor property.
 */
export declare function Reflect_get<T extends object, P extends LoosePropertyKey>(
	target: T,
	propertyKey: P,
	receiver?: any,
): P extends keyof T ? T[P] : any;

/**
 * Gets the own property descriptor of the specified object.
 * An own property descriptor is one that is defined directly on the object and is not inherited from the object's prototype.
 * @param target Object that contains the property.
 * @param propertyKey The property name.
 */
export declare function Reflect_getOwnPropertyDescriptor<T extends object, P extends LoosePropertyKey>(
	target: T,
	propertyKey: P,
	receiver?: any,
): (P extends keyof T ? TypedPropertyDescriptor<T[P]> : PropertyDescriptor) | undefined;

/**
 * Returns the prototype of an object.
 * @param target The object that references the prototype.
 */
export declare function Reflect_getPrototypeOf<P extends object | null = any>(target: object): P;

/**
 * Equivalent to `propertyKey in target`.
 * @param target Object that contains the property on itself or in its prototype chain.
 * @param propertyKey Name of the property.
 */
export declare function Reflect_has(target: object, propertyKey: LoosePropertyKey): boolean;

/**
 * Returns a value that indicates whether new properties can be added to an object.
 * @param target Object to test.
 */
export declare function Reflect_isExtensible(target: object): boolean;

/**
 * Returns the keys of the own properties of an object. The own properties of an object are those that are defined directly
 * on that object, and are not inherited from the object's prototype. The properties of an object include both fields (objects) and functions.
 * @param target Object that contains the own properties.
 */
// prettier-ignore
export declare function Reflect_getOwnPropertyKeys<T extends object>(target: T): Extract<keyof T, StrictPropertyKey>[];

/**
 * Prevents the addition of new properties to an object.
 * @param target Object to make non-extensible.
 * @return Whether the object has been made non-extensible.
 */
export declare function Reflect_preventExtensions(target: object): boolean;

/**
 * Sets the property of target, equivalent to `target[propertyKey] = value` when `receiver === target`.
 * @param target Object that contains the property on itself or in its prototype chain.
 * @param propertyKey Name of the property.
 * @param receiver The reference to use as the `this` value in the setter function,
 *        if `target[propertyKey]` is an accessor property.
 */
export declare function Reflect_set<T extends object, P extends LoosePropertyKey>(
	target: T,
	propertyKey: P,
	value: P extends keyof T ? T[P] : any,
	receiver?: any,
): boolean;
export declare function Reflect_set(target: object, propertyKey: LoosePropertyKey, value: any, receiver?: any): boolean;

/**
 * Sets the prototype of a specified object o to object proto or null.
 * @param target The object to change its prototype.
 * @param proto The value of the new prototype or null.
 * @return Whether setting the prototype was successful.
 */
export declare function Reflect_setPrototypeOf(target: object, proto: object | null): boolean;
//#endregion
