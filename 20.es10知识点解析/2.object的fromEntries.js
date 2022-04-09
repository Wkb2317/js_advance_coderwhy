const info = {
  name: 'wkb',
  age: 18,
}

const entries = Object.entries(info)

// for in 拿到的是索引值
// for of 拿到的是每个元素
const obj = {}
// 遍历entries，生成对象
for (const item of entries) {
  obj[item[0]] = item[1]
}

// Object.fromEntries()
const newObj = Object.fromEntries(entries)
console.log(newObj)

// 应用场景
const queryString = 'id=123&name=wkb&psw=hhhh'
const queryParams = new URLSearchParams(queryString)

console.log(Object.fromEntries(queryParams))
