const obj = {
  name: 'wkb',
  age: 12,
  hobbies: ['code', 'game'],
}

// 指定序列化
console.log(JSON.stringify(obj, ['name', 'age']))

// replacer
console.log(
  JSON.stringify(obj, (key, value) => {
    if (key === 'age') {
      return 18
    }
    return value
  })
)

// space参数
console.log(JSON.stringify(obj, null, '  '))
