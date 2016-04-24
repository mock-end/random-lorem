# random-lorem

> Return a random lorem world.

[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-lorem/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-lorem/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-lorem)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-lorem/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-lorem)


## Install

```
$ npm install --save random-lorem
```

## Usage

> For more use-cases see the [tests](https://github.com/mock-end/random-lorem/blob/master/test/spec/index.js)


```js
var randomLorem = require('random-lorem');

// API
// - randomLorem();
// - randomLorem(max);
// - randomLorem(min, max);
```

By default, return a string with the length between `1` and `20`:

```js
randomLorem();
// => ksifopmelq
```

Can optionally provide the max length:

```js
randomLorem(8);
// => asdjlk
```

Can optionally provide min and max length:

```js
randomLorem(4, 9);
// => yuqwdf

randomLorem(5, 5); // should only have 5 chars.
// => ksijh
```

**Note**: these min and max are **inclusive**, so they are included in the range. 

This means `randomLorem(2, 4)` return the lorem would have a length either `2`, `3` or `4`.


## Related

- [random-lorem](https://github.com/mock-end/random-lorem) - Return a random lorem world.
- [random-title](https://github.com/mock-end/random-title) - Return a random title.
- [random-sentence](https://github.com/mock-end/random-sentence) - Return a random sentence.
- [random-paragraph](https://github.com/mock-end/random-paragraph) - Return a random paragraph.

## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-lorem/issues/new).
