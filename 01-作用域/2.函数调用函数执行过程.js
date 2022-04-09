var message = 'hello'

function foo() {
  console.log(message);
}

function bar() {
  var message = 'message'
  foo()
}

bar()

// 在代码编译的时候，就确定了foo的父级作用域链是全局对象
// 代码的父级是根据代码的位置，不是根据调用顺序。