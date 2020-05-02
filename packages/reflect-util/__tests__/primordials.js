import test from "tape";

import primordials from "reflect-util/primordials.cjs";

test("primordials", t => {
	t.true(Object.isFrozen(primordials), "primordials object is frozen");
	t.equal(Object.getPrototypeOf(primordials), null, "primordials object has null prototype");
	// @ts-ignore
	t.equal(primordials[Symbol.toStringTag], "Primordials", "primordials object has correct Symbol.toStringTag value");

	t.end();
});
