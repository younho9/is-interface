export declare function isInterface <ObjectType extends Record<string, unknown>>(
	value: unknown,
	interface_: {
		[Key in keyof ObjectType]: (value: unknown) => value is ObjectType[Key];
	},
): value is ObjectType;
