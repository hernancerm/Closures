# Closures

A closure is a function — call it «inner function» —, declared within another function — call it «outer function» —, that has access to the outer function's lexical scope *even after* the outer function has returned.

Another way to put the same idea:

A closure is a nested function which has access to the lexical scope of its outer function *even after* the outer function has returned.

Closure example: [Mouse.js](./Mouse.js)

## Encapsulation through closures

In OOP, encapsulation is achieved through access modifiers — `public`, `private`, etc. In FP, encapsulation can be achieved through closures, which heavily rely on lexical scope, e.g.

`Mouse.java` — OOP

```java
class Mouse {
  // Encapsulated data
  private String name;

  public Mouse(String name) {
    this.name = name;
  }

  public void sayHello() {
    System.out.printf("Hello! My name is %s", name);
  };
}
```

`Mouse.js` — FP

```js
function Mouse(state) {
  // Encapsulated data
  const name = state.name;

  function sayHello() {
    console.log(`Hello! My name is ${name}`);
  }

  return { sayHello };
}
```

## Notes about closures

- Lambda functions are a completely independent concept from closures. Closures don't require to be anonymous or named, just to be a function.
- A closure can only exist in the context of nested functions — functions within functions.

## Useful resources for understanding closures

- Dan Abramov's <https://whatthefuck.is/closure>
- Michell Ayala's [Clausuras (Closures) - Javascript](https://youtu.be/KzKLcS65N04)
- Stack Overflow's [What is lexical scope?](https://stackoverflow.com/questions/1047454/what-is-lexical-scope)