let namew = 'wkb'
let age = 12

let obj = {
  // 1. 属性
  namew,
  age,

  // 2.方法
  foo() {},

  // 3. 计算属性
  [namew + '123']: 'hhh',
}

console.log(obj)
