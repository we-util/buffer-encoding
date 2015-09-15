var encoding = require('encoding')
var chardet = require('jschardet')

exports.convert = function convert (txt, toEnc, fromEnc) {
  // if no from-encoding specified
  // then use encoding detection
  if (!fromEnc) {
    fromEnc = chardet.detect(txt).encoding
  }

  // use lib-'encoding' to perform buffer converting
  var newBuf = encoding.convert(txt, toEnc, fromEnc)
  return newBuf
}
