# random-lorem

> Return a semi-pronounceable random (nonsense) word.

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
// - randomLorem([options]);

// options
// - syllables
// - length
// - min
// - max
```

The word is returned in all lower case.

```js
randomLorem();
// => 'tavnamgi'
```

Default is a word with a random number of syllables from `1` to `3`.

*This length is chosen as it works out to the average word length of `~5-6` chars which seems about right.*

Can optionally specify a number of syllables which the word will have.

Note these are not syllables in the strict language definition of the word, but syllables as we’ve defined here which is `2` or `3` characters, mostly alternating between vowel and consanant. This is the about the best we can do with purely random generation.

```js
randomLorem({ syllables: 3 });
// => 'tavnamgi'
```


Can optionally specify a length and the word will obey that bounding:

```js
randomLorem({ length: 5 });
// => 'ralve'
```

In this case these two options are mutually exclusive, that is they cannot be combined as they often make no sense. It wouldn’t be possible to have a word with `7` syllables and a length of `5` or a length of `30` but `2` syllables.


Can optionally provide `min` and `max`, then with a random length:

```js
randomLorem({ min: 2, max: 12 });
// => 'bappada'
```

## Related

- [random-syllable](https://github.com/mock-end/random-syllable) - Return a semi-speakable syllable, 2 or 3 letters.
- [random-title](https://github.com/mock-end/random-title) - Return a random title populated by semi-pronounceable random (nonsense) words.
- [random-sentence](https://github.com/mock-end/random-sentence) - Return a random sentence populated by semi-pronounceable random (nonsense) words.
- [random-paragraph](https://github.com/mock-end/random-paragraph) - Return a random paragraph generated from sentences populated by semi-pronounceable random (nonsense) words.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-lorem/issues/new).
