let name = ['wkb', 'coder', 'aaa']

let [item1, item2, item3] = name

console.log(item1)
console.log(item2)
console.log(item3)

// 剩余参数
let [item, ...arry] = name
console.log(arry)

// 默认参数
let [i1, i2, i3, i4 = 'www'] = name
console.log(i4)
