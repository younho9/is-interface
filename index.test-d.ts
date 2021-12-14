import is from '@sindresorhus/is';
import {expectType, expectNotType} from 'tsd';
import {isInterface} from './index.js';

declare const someObject: unknown;

type Predicate<Type> = (value: unknown) => value is Type;

if (isInterface(someObject, {
	foo: is.number as Predicate<number>,
	bar: is.string as Predicate<string>,
	baz: is.boolean as Predicate<boolean>,
})) {
	expectType<number>(someObject.foo);
	expectType<string>(someObject.bar);
	expectType<boolean>(someObject.baz);
} else {
	expectNotType<{
		foo: number;
		bar: string;
		baz: boolean;
	}>(someObject);
}
