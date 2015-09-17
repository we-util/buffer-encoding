# buffer-encoding

Convert buffers across different encodings, with encoding detection support.

Built on top of [encoding](https://github.com/andris9/encoding) and [jschardet](https://github.com/aadsm/jschardet).

```js
var convert = require('buffer-encoding').convert

var buf = convert(someBuf, 'gb2312', 'utf8') // utf8 => gb2312
var buf = convert(someBuf, 'utf8', 'gb2312') // gb2312 => utf8

var buf = convert(someStr, 'utf8', 'gb2312') // or string input instead

var buf = convert(someBuf, 'utf8') // even with encoding detection
var buf = convert(someBuf) // whatever => utf8
```

```plain
convert(bufferOrString, [toEncoding], [fromEncoding])
```
