// let obj = {
//   name: 'why',
//   age: 12,
// }

// obj['name'] = 'coder' // 键值相同会覆盖
// console.log(obj)

// Symbol
const s1 = Symbol('111')
const s2 = Symbol('222')
const s3 = Symbol('333')

// console.log(s1 === s2) // 独一无二

// console.log(s1.description)

// 1. 字面量使用
const obj = {
  [s1]: 'abc',
  [s2]: 'ccc',
}

// 2. 新增属性
obj[s3] = 'aas'

// 3.获取Symbol值
// console.log(obj.s1) // 获取不到 undefined
// console.log(obj[s1])

// console.log(Object.keys(obj)) // 获取不到

// 4. Object.getOwnPropertySymbols() 获取symbol的key值
const keys = Object.getOwnPropertySymbols(obj)

for (const item of keys) {
  console.log(obj[item])
}

// 5. Symbol.for(key) 创建相同的Symbol
const sa = Symbol.for('111')
const sb = Symbol.for('111')
console.log(sa === sb) // true

//6. Symbol.keyFor()
console.log(Symbol.keyFor(sa))
