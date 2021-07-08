(function () {
  var global = typeof window !== 'undefined' ? window : this || Function('return this')();
  var nx = global.nx || require('@jswork/next');

  // https://stackoverflow.com/questions/11089732/display-image-from-blob-using-javascript-and-websockets
  nx.arraybuffer2blob = function (inBuffer) {
    var bytes = new Uint8Array(inBuffer);
    return new Blob([bytes.buffer]);
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.arraybuffer2blob;
  }
})();
