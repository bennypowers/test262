// Copyright (C) 2026 NullVoxPopuli. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: >
  A decorator ends before `[`, so `@decorators` followed by `[0]` on the next
  line decorates a computed field named "0"
esid: prod-Decorator
info: |
  DecoratorMemberExpression[Yield, Await] :
    IdentifierReference[?Yield, ?Await]
    DecoratorMemberExpression[?Yield, ?Await] . IdentifierName
    DecoratorMemberExpression[?Yield, ?Await] . PrivateIdentifier
features: [decorators, class-fields-public]
---*/

var contexts = [];
function decorators(value, context) {
  contexts.push(context);
}

class A {
  @decorators
  [0]
  method() {}
}

assert.sameValue(contexts.length, 1, 'one decorator call');
assert.sameValue(contexts[0].kind, 'field', 'the decorator decorates the computed field');
assert.sameValue(contexts[0].name, '0', 'the field name is "0"');
assert.sameValue(typeof A.prototype.method, 'function', 'method is not decorated');
assert.sameValue(Object.prototype.hasOwnProperty.call(new A(), '0'), true, 'the field is defined');
