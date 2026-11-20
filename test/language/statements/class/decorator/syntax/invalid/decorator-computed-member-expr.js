// Copyright (C) 2026 Benny Powers. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: A computed member expression is not valid decorator syntax
esid: prod-Decorator
info: |
  DecoratorMemberExpression[Yield, Await] :
    IdentifierReference[?Yield, ?Await]
    DecoratorMemberExpression[?Yield, ?Await] . IdentifierName
    DecoratorMemberExpression[?Yield, ?Await] . PrivateIdentifier

  The decorator is `@decorators`. `[0]` starts a computed field, and the
  field must end before `method` on the same line.
negative:
  phase: parse
  type: SyntaxError
features: [decorators]
---*/

$DONOTEVALUATE();

var decorators = [function() {}];

class A {
  @decorators[0] method() {}
}
