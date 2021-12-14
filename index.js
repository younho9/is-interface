import {objectEntries, objectHasOwn} from 'ts-extras';

export function isInterface(value, interface_) {
	return objectEntries(interface_).every(
		([key, predicate]) => objectHasOwn(value, key) && predicate(value[key]),
	);
}
