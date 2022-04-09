const info = ['wkb', 12, 1.8]

const user = {
  name: 'wkb',
  age: 12,
}

// 1. 函数调用时
function foo(x, y, z) {
  console.log(x, y, z)
}

foo(...info)

// 2. 构造数组,对象时
const newUser = { address: 'ggg', ...user }
console.log(newUser)
