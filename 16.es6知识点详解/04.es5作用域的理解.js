//  es5之前是没有块级作用域
// 在es5中只有两个作用域

// 1. 全局作用域

// 2. 函数作用域

function foo() {
  function demo() {}
}

// 三层作用域
// 1.全局  2.foo  3. demo
