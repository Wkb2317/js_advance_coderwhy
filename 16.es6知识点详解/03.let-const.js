// 1. 不能重复定义
let message = '212'
// let message = '123' 报错

// 2. const 不能修改变量，能修改引用类型的属性

const foo = '123'
// foo = '12334'
// console.log(foo) 报错

const obj = {
  message: '123',
}

obj.message = '456'
console.log(obj.message)
