/** @type {false | object} */
export default ((() => {
	try {
		return (0, eval)("%GetUndetectable()");
	} catch (err) {
		return false;
	}
})());
