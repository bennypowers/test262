// This file was procedurally generated from the following sources:
// - src/decorator/class-deco-returns-non-constructor.case
// - src/decorator/class/standard/cls-decl.template
/*---
description: Class decorator can return a callable that is not a constructor (decorator usage in a class declaration)
esid: prod-ClassDeclaration
features: [decorators, arrow-function, class]
flags: [generated]
info: |
    ApplyDecoratorsToClassDefinition ( classDef, decorators, className, extraInitializers )

    ...
    1. For each element decoratorRecord of decorators, do
      ...
      g. If IsCallable(newDef) is true, then
        i. Set classDef to newDef.
      h. Else if newDef is not undefined, then
        i. Throw a TypeError exception.

---*/


var arrow = () => 123;

function dec() {
  return arrow;
}


@dec

class C {
  
}

assert.sameValue(C, arrow, 'the binding is the returned arrow function');
assert.sameValue(C(), 123, 'the arrow function can be called');
assert.throws(TypeError, function() {
  new C();
}, 'the arrow function is not a constructor');
