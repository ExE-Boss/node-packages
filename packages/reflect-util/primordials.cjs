"use strict";

const { getOwnPropertyNames, defineProperty, setPrototypeOf, preventExtensions } = Object;

/** @typedef {NonNullable<Parameters<typeof Object.create>[0]>} obj */

/**
 * @param {obj} source
 * @param {obj} target
 * @param {string} sourceName
 * @param {Record<string, string> | null} [renames]
 */
function copyOwnProperties(source, target, sourceName, renames = null) {
	for (const name of getOwnPropertyNames(source)) {
		if (name === "prototype" || name === "name" || name === "length") {
			continue;
		}

		const property = source[name];
		let newName = renames !== null ? renames[name] : null;

		defineProperty(target, `${sourceName}_${newName || name}`, {
			enumerable: true,
			value: property,
		});
	}
}

setPrototypeOf(exports, null);
defineProperty(exports, Symbol.toStringTag, { value: "Primordials" });
defineProperty(exports, "undefined", { enumerable: true });

defineProperty(exports, "Object", { enumerable: true, value: Object });
copyOwnProperties(Object, exports, "Object", {
	freeze: "freezeOrThrow",
	seal: "sealOrThrow",
	preventExtensions: "preventExtensionsOrThrow",
	defineProperty: "definePropertyOrThrow",
	defineProperties: "definePropertiesOrThrow"
});

const ObjProto = Object.prototype;
defineProperty(exports, "ObjProto", { value: ObjProto, enumerable: true });
defineProperty(exports, "ObjProto_hasOwnProperty", {
	enumerable: true,
	value: ObjProto.hasOwnProperty,
});

defineProperty(exports, "ObjProto_isPrototypeOf", {
	enumerable: true,
	value: ObjProto.isPrototypeOf,
});

defineProperty(exports, "Function", { enumerable: true, value: Function });

const FuncProto = Function.prototype;
defineProperty(exports, "FuncProto", { enumerable: true, value: FuncProto });
defineProperty(exports, "FuncProto_apply", { enumerable: true, value: FuncProto.apply });
defineProperty(exports, "FuncProto_call", { enumerable: true, value: FuncProto.call });
defineProperty(exports, "FuncProto_bind", { enumerable: true, value: FuncProto.bind });
defineProperty(exports, "FuncProto_toString", { enumerable: true, value: FuncProto.toString });

defineProperty(exports, "Symbol", { enumerable: true, value: Symbol });
copyOwnProperties(Symbol, exports, "Symbol");

defineProperty(exports, "Math", { enumerable: true, value: Math });
copyOwnProperties(Math, exports, "Math");

defineProperty(exports, "Reflect", { enumerable: true, value: Reflect });
copyOwnProperties(Reflect, exports, "Reflect", {
	ownKeys: "getOwnPropertyKeys",
});

preventExtensions(exports);
