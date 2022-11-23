import assert from 'node:assert/strict'
import test from 'node:test'
import {isAlphabetical} from './index.js'

test('isAlphabetical(character)', function () {
  const _0 = 0x30
  const A = 0x41
  const Z = 0x5a
  const a = 0x61
  const z = 0x7a

  assert.ok(isAlphabetical('a'))
  assert.ok(isAlphabetical('Z'))
  assert.ok(isAlphabetical(a))
  assert.ok(!isAlphabetical('0'))
  assert.ok(!isAlphabetical(a - 1))
  assert.ok(!isAlphabetical(z + 1))
  assert.ok(!isAlphabetical(A - 1))
  assert.ok(!isAlphabetical(Z + 1))
  assert.ok(!isAlphabetical(_0))
  assert.ok(!isAlphabetical('💩'))
})
