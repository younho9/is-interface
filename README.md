# is-interface

> Type Guard for interface

## Install

```
npm install is-interface
```

## Usage

```ts
import is from "@sindresorhus/is";
import { isInterface } from "is-interface";

declare const someObject: unknown;

if (
  isInterface(someObject, {
    foo: is.string,
    bar: is.number,
    baz: is.boolean,
  })
) {
  someObject;
  // const someObject: {
  //     foo: string;
  //     bar: number;
  //     baz: boolean;
  // }
}
```

## Related

- [is](https://github.com/sindresorhus/is) - Type guards for any situation

## LICENSE

[MIT](LICENSE)
