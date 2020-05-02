`reflect-util`<br/>
[![Build](https://img.shields.io/travis/com/ExE-Boss/node-packages/master)](https://travis-ci.com/ExE-Boss/node-packages)
[![License](https://img.shields.io/github/license/ExE-Boss/node-packages.svg)](https://github.com/ExE-Boss/node-packages/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/v/reflect-util.svg)](https://www.npmjs.com/package/reflect-util)
===================

A module that provides additional methods not found on <code>[%Reflect%]</code>.

## API

### apply( <var>target</var>, <var>thisArg</var>, <var>args</var> )

Same as <code>[%Reflect.apply%]</code>.

### call( <var>target</var>, <var>thisArg</var>, ...<var>args</var> )

Same as <code>[%Reflect.apply%]</code>, except it uses rest parameters.

### bindApply( <var>target</var> [ , <var>thisArg</var> [ , ...<var>args</var> ] ] )

Equivalent to <code>[%Function.prototype.apply%].bind</code>.

### bindCall( <var>target</var> [ , <var>thisArg</var> [ , ...<var>args</var> ] ] )

Equivalent to <code>[%Function.prototype.call%].bind</code>.

### construct( <var>target</var>, <var>args</var> [ , <var>newTarget</var> ] )

Same as <code>[%Reflect.construct%]</code>.

### defineProperties ( <var>target</var>, <var>propertyAttributeMap</var> )

Same as <code>[%Object.defineProperties%]</code>, except it doesn't throw when setting a property fails.

<dl>
<dt><strong>Parameters:</strong></dt>
<dd>

| Param             | Type     | Description
| -----             | ----     | -----------
| <var>target</var> | `object` | Object on which to add or modify the properties. This can be a native JavaScript object or a DOM object.
| <var>propertyAttributeMap</var> | `Partial<PropertyDescriptorMap> & ThisType<any>` | JavaScript object that contains one or more descriptor objects. Each descriptor object describes a data property or an accessor property.

</dd>
<dt><strong>Returns:</strong></dt>
<dd>Whether setting all properties was successful.</dd>
<dt><strong>Throws:</strong></dt>
<dd>

| Error type  | Description
| ----------  | -----------
| `TypeError` | If either argument isn't an object.

</dd>
</dl>

### defineProperty ( <var>target</var>, <var>propertyKey</var>, <var>attributes</var> )

Same as <code>[%Reflect.defineProperty%]</code>.

### deleteProperty ( <var>target</var>, <var>propertyKey</var>, <var>attributes</var> )

Same as <code>[%Reflect.deleteProperty%]</code>.

### get ( <var>target</var>, <var>propertyKey</var> [ , <var>receiver</var> ] )

Same as <code>[%Reflect.get%]</code>.

### getInheritedPropertyDescriptor ( <var>target</var>, <var>propertyKey</var> )

Gets the possibly inherited property descriptor of the specified object.

<dl>
<dt><strong>Parameters:</strong></dt>
<dd>

| Param             | Type     | Description
| -----             | ----     | -----------
| <var>target</var> | `object` | Object that contains the property on itself or in its prototype chain.
| <var>propertyKey</var> | `PropertyKey` | The property name.

</dd>
<dt><strong>Returns:</strong></dt>
<dd>The value, or <code>undefined</code>, if it isn't an own property of <var>target</var>.</dd>
<dt><strong>Throws:</strong></dt>
<dd>

| Error type  | Description
| ----------  | -----------
| `TypeError` | If <var>target</var> isn't an object.

</dd>
</dl>

### getOwnPropertyDescriptor ( <var>target</var>, <var>propertyKey</var> )

Same as <code>[%Reflect.getOwnPropertyDescriptor%]</code>.

### getOwnPropertyDescriptors ( <var>target</var> )

Same as <code>[%Object.getOwnPropertyDescriptors%]</code>, except it throws a `TypeError` if <var>target</var> isn't an object.

### getOwnPropertyKeys ( <var>target</var> )

Same as <code>[%Reflect.ownKeys%]</code>.

### getOwnPropertyNames ( <var>target</var> )

Same as <code>[%Object.getOwnPropertyNames%]</code>, except it throws a `TypeError` if <var>target</var> isn't an object.

### getOwnPropertySymbols ( <var>target</var> )

Same as <code>[%Object.getOwnPropertySymbols%]</code>, except it throws a `TypeError` if <var>target</var> isn't an object.

### getOwnPropertyValue ( <var>target</var>, <var>propertyKey</var> [ , <var>receiver</var> ] )

Same as <code>[%Reflect.get%]</code>, but only checks <var>target</var>'s own properties.

### getPrototypeOf ( <var>target</var> )

Same as <code>[%Reflect.getPrototypeOf%]</code>.

### has ( <var>target</var>, <var>propertyKey</var> )

Same as <code>[%Reflect.has%]</code>.

### hasOwnProperty ( <var>target</var>, <var>propertyKey</var> )

Same as <code>[%Object.prototype.hasOwnProperty%].call</code>, except it throws if <var>target</var> isn't an object.

### isConstructor ( <var>target</var> )

Checks whether <var>target</var> is a constructor.

<dl>
<dt><strong>Parameters:</strong></dt>
<dd>

| Param             | Type  | Description
| -----             | ----  | -----------
| <var>target</var> | `any` | Any value to check.

</dd>
<dt><strong>Returns:</strong></dt>
<dd>Whether <var>target</var> can be called with the <code>new</code> operator or <code>Reflect.construct</code>.</dd>
<dt><strong>See:</strong></dt>
<dd>

- [The `Reflect.isCallable()` / `Reflect.isConstructor()` TC39 proposal][caitp-tc39-proposals-reflect-isconstructor]
- [tc39/ecma262#1798 (comment)][tc39-ecma262-isconstructor]

</dd>
</dl>

### isExtensible ( <var>target</var> )

Same as <code>[%Reflect.isExtensible%]</code>.

### isObject ( <var>target</var> )

Same as <code>[is-true-object][npmjs-is-true-object]</code>.

### isPrototypeOf ( <var>proto</var>, <var>target</var> )

Same as <code>[%Object.prototype.isPrototypeOf%].call</code>, except it throws if <var>proto</var> isn't an object.

### isSameValue ( <var>value1</var>, <var>value2</var> )

Same as <code>[%Object.is%]</code>.

### preventExtensions ( <var>target</var> )

Same as <code>[%Reflect.preventExtensions%]</code>.

### set ( <var>target</var>, <var>propertyKey</var>, <var>value</var> [ , <var>receiver</var> ] )

Same as <code>[%Reflect.set%]</code>.

### setPrototypeOf ( <var>target</var>, <var>proto</var> )

Same as <code>[%Reflect.setPrototypeOf%]</code>.

[caitp-tc39-proposals-reflect-isconstructor]: https://github.com/caitp/TC39-Proposals/blob/master/tc39-reflect-isconstructor-iscallable.md#reflectisconstructor--argument-
[tc39-ecma262-isconstructor]: https://github.com/tc39/ecma262/issues/1798#issuecomment-559914634
[npmjs-is-true-object]: https://www.npmjs.com/package/is-true-object

[%Object.defineProperties%]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
[%Object.getOwnPropertyDescriptors%]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptors
[%Object.getOwnPropertyNames%]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
[%Object.getOwnPropertySymbols%]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols
[%Object.is%]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/is

[%Object.prototype.hasOwnProperty%]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
[%Object.prototype.isPrototypeOf%]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/isPrototypeOf

[%Function.prototype.apply%]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/apply
[%Function.prototype.call%]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Function/call

[%Reflect%]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Reflect
[%Reflect.apply%]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Reflect/apply
[%Reflect.construct%]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Reflect/construct
[%Reflect.defineProperty%]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Reflect/defineProperty
[%Reflect.deleteProperty%]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Reflect/deleteProperty
[%Reflect.get%]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Reflect/get
[%Reflect.getOwnPropertyDescriptor%]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getOwnPropertyDescriptor
[%Reflect.getPrototypeOf%]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Reflect/getPrototypeOf
[%Reflect.has%]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Reflect/has
[%Reflect.isExtensible%]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Reflect/isExtensible
[%Reflect.ownKeys%]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Reflect/ownKeys
[%Reflect.preventExtensions%]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Reflect/preventExtensions
[%Reflect.set%]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Reflect/set
[%Reflect.setPrototypeOf%]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Reflect/setPrototypeOf
