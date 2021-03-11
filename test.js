import test from 'tape'
import {isAlphabetical} from './index.js'

test('isAlphabetical(character)', function (t) {
  t.ok(isAlphabetical('a'))
  t.ok(isAlphabetical('Z'))
  t.ok(isAlphabetical('a'.charCodeAt(0)))
  t.notOk(isAlphabetical('0'))
  t.notOk(isAlphabetical('a'.charCodeAt(0) - 1))
  t.notOk(isAlphabetical('z'.charCodeAt(0) + 1))
  t.notOk(isAlphabetical('A'.charCodeAt(0) - 1))
  t.notOk(isAlphabetical('Z'.charCodeAt(0) + 1))
  t.notOk(isAlphabetical('0'.charCodeAt(0)))
  t.notOk(isAlphabetical('💩'))

  t.end()
})
