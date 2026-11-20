// Copyright (C) 2026 NullVoxPopuli. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.
/*---
description: Decorators are not valid on a constructor with a string literal name
esid: sec-class-definitions-static-semantics-early-errors
info: |
  ClassElement : DecoratorList? MethodDefinition

  It is a Syntax Error if DecoratorList is present and PropName of MethodDefinition is "constructor".
negative:
  phase: parse
  type: SyntaxError
features: [decorators]
---*/

$DONOTEVALUATE();

function dec() {}

class C {
  @dec "constructor"() {}
}
