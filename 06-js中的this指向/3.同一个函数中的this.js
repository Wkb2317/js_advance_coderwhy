function foo() {
  console.log(this);
}

foo()

let obj = {
  name : 'wkb',
  foo: foo
}

obj.foo()

foo.call('123')

