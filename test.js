import is from '@sindresorhus/is';
import test from 'ava';
import {isInterface} from './index.js';

test('isInterface()', t => {
	const someObject = {
		foo: 1,
		bar: 'two',
		baz: true,
	};

	t.true(isInterface(someObject, {
		foo: is.number,
		bar: is.string,
		baz: is.boolean,
	}));

	t.false(isInterface(someObject, {
		foo: is.symbol,
		bar: is.string,
		baz: is.boolean,
	}));
});

