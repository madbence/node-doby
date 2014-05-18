# node-doby

Provides the same functionality as [DoBy](https://github.com/andyw8/do_by).

## Install

```
$ npm install doby
```

## Usage

```js
var todo = require('doby');

todo('Do this!', '2014-05-19');
```

## API

#### todo(note, date)

Throws an exception with message `note`, if executed after `date`.
`date` is a date'ish thing, basically anything that `Date` constructor
understands.

## License

MIT
