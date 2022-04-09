// es6块级作用域

{
  let foo = 'why'
  function demo() {
    console.log('demo function')
  }

  class Person {}
}

// console.log(foo)  访问不到

// 不同的浏览器有不同的实现，为了浏览器兼容以前的代码，让function没有块级作用域
demo() // 可以访问

// let person = new Person()  访问不到
