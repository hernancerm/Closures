function Mouse(state) {
  const name = state.name;

  // sayHello() is a closure
  function sayHello() {
    console.log(`Hello! My name is ${name}`);
  }

  return { sayHello };
}

const mario = Mouse({ name: "Mario" });
// Mouse() has returned, therefore the stack frame
// holding the function variables should be dropped.
// However, the lexical scope is maintained because
// mario.sayHello refers to it through «name», and
// even now that mouse() has returned, mario.sayHello
// still has access to *its* scope of Mouse(), where
// «name = "Mario"».

mario.sayHello();
// Output: Hello! My name is Mario

const luigi = Mouse({ name: "Luigi" });
// Similarly, Mouse() has returned again, but
// since luigi.sayHello is a closure, it still
// has access to *its* scope of Mouse(), where
// «name = "Luigi"».

luigi.sayHello();
// Output: Hello! My name is Luigi
