function satisfies(condition, item) {
	if (typeof condition === 'function') {
		return condition(item);
	} else if (condition instanceof RegExp) {
		return condition.test(item);
	}

	return false;
}

module.exports = (collection, condition) => {
	if (typeof collection !== 'object' || Array.isArray(collection)) {
		throw new Error('Collection must be an object!');
	}

	Object.keys(collection).forEach((elem) => {
		if (condition && satisfies(condition, elem) || !condition) {
			// eslint-disable-next-line no-param-reassign
			delete collection[elem];
		}
	});
};
