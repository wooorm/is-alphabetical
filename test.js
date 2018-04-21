'use strict';

var test = require('tape');
var alphabetical = require('.');

test('alphabetical(character)', function (t) {
  t.ok(alphabetical('a'));
  t.ok(alphabetical('Z'));
  t.ok(alphabetical('a'.charCodeAt(0)));
  t.notOk(alphabetical('0'));
  t.notOk(alphabetical('a'.charCodeAt(0) - 1));
  t.notOk(alphabetical('z'.charCodeAt(0) + 1));
  t.notOk(alphabetical('A'.charCodeAt(0) - 1));
  t.notOk(alphabetical('Z'.charCodeAt(0) + 1));
  t.notOk(alphabetical('0'.charCodeAt(0)));
  t.notOk(alphabetical('💩'));

  t.end();
});
