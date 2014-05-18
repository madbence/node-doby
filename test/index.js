var test = require('tape');
var todo = require('../');

test('expired note', function(t) {
  t.plan(1);
  t.throws(function() {
    todo('foo', new Date(1970,1,1));
  });
});

test('future note', function(t) {
  t.plan(1);
  todo('Fix tests, because they will fail', new Date(2038, 1, 1));
  t.doesNotThrow(function() {
    todo('foo', new Date(2038,1,1));
  });
});
