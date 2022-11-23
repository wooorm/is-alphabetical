import test from 'tape'
import {isAlphabetical} from './index.js'

test('isAlphabetical(character)', function (t) {
  const _0 = 0x30
  const A = 0x41
  const Z = 0x5a
  const a = 0x61
  const z = 0x7a
  t.ok(isAlphabetical('a'))
  t.ok(isAlphabetical('Z'))
  t.ok(isAlphabetical(a))
  t.notOk(isAlphabetical('0'))
  t.notOk(isAlphabetical(a - 1))
  t.notOk(isAlphabetical(z + 1))
  t.notOk(isAlphabetical(A - 1))
  t.notOk(isAlphabetical(Z + 1))
  t.notOk(isAlphabetical(_0))
  t.notOk(isAlphabetical('💩'))

  t.end()
})
