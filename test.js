var convert = require('./').convert
var assert = require('assert')

/* global describe, it */
describe('buffer-encoding', function () {
  // https://github.com/aadsm/jschardet/blob/master/tests%2Fjschardet.js
  it('gb2312 => utf8', function () {
    var str = '情人节为每年的2月14日，是西方的传统节日之一。这节日原来纪念两位同是名叫华伦泰的基督宗教初期教会殉道圣人。'
    var _str = '\xC7\xE9\xC8\xCB\xBD\xDA\xCE\xAA\xC3\xBF\xC4\xEA\xB5\xC4\x32\xD4\xC2\x31\x34\xC8\xD5\xA3\xAC\xCA\xC7\xCE\xF7\xB7\xBD\xB5\xC4\xB4\xAB\xCD\xB3\xBD\xDA\xC8\xD5\xD6\xAE\xD2\xBB\xA1\xA3\xD5\xE2\xBD\xDA\xC8\xD5\xD4\xAD\xC0\xB4\xBC\xCD\xC4\xEE\xC1\xBD\xCE\xBB\xCD\xAC\xCA\xC7\xC3\xFB\xBD\xD0\xBB\xAA\xC2\xD7\xCC\xA9\xB5\xC4\xBB\xF9\xB6\xBD\xD7\xDA\xBD\xCC\xB3\xF5\xC6\xDA\xBD\xCC\xBB\xE1\xD1\xB3\xB5\xC0\xCA\xA5\xC8\xCB\xA1\xA3'
    assert.equal(convert(_str, 'utf8', 'gb2312').toString(), str)
    assert.equal(convert(_str, 'utf8').toString(), str)
    assert.equal(convert(_str).toString(), str)
  })

  it('big5 => utf8', function () {
    var str = '次常用國字標準字體表'
    var _str = '\xA6\xB8\xB1\x60\xA5\xCE\xB0\xEA\xA6\x72\xBC\xD0\xB7\xC7\xA6\x72\xC5\xE9\xAA\xED'
    assert.equal(convert(_str, 'utf8', 'big5').toString(), str)
    assert.equal(convert(_str, 'utf8').toString(), str)
    assert.equal(convert(_str).toString(), str)
  })

  it('ascii => utf8', function () {
    var str = 'Normal ascii letters.'
    assert.equal(convert(str, 'utf8', 'ascii').toString(), str)
    assert.equal(convert(str, 'utf8').toString(), str)
    assert.equal(convert(str).toString(), str)
  })

  it('utf8 => utf8', function () {
    var str = '\xEF\xBB\xBFutf8 string'
    assert.equal(convert(str, 'utf8', 'utf8').toString(), str)
    assert.equal(convert(str, 'utf8').toString(), str)
    assert.equal(convert(str).toString(), str)
  })

  it('utf8 => utf8 w/o bom', function () {
    var str = '\xc3\xa0\xc3\xad\xc3\xa0\xc3\xa7\xc3\xa3'
    assert.equal(convert(str, 'utf8', 'utf8').toString(), str)
    assert.equal(convert(str, 'utf8').toString(), str)
    assert.equal(convert(str).toString(), str)
  })
})
