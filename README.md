# next-arraybuffer2blob
> Arraybuffer to blob.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-arraybuffer2blob
```

## usage
```js
import '@jswork/next-arraybuffer2blob';

socket.onmessage = function(msg) {
  var arrayBuffer = msg.data;
  var blob = nx.arraybuffer2blob(arrayBuffer);
  var image = document.getElementById('image');
  var reader = new FileReader();
  reader.onload = function(e) {
    // base64
    image.src = e.target.result;
  };
  reader.readAsDataURL(blob);
};
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-arraybuffer2blob/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-arraybuffer2blob
[version-url]: https://npmjs.org/package/@jswork/next-arraybuffer2blob

[license-image]: https://img.shields.io/npm/l/@jswork/next-arraybuffer2blob
[license-url]: https://github.com/afeiship/next-arraybuffer2blob/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-arraybuffer2blob
[size-url]: https://github.com/afeiship/next-arraybuffer2blob/blob/master/dist/next-arraybuffer2blob.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-arraybuffer2blob
[download-url]: https://www.npmjs.com/package/@jswork/next-arraybuffer2blob
