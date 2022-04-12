const obj = {
  name: 'wkb',
  age: 18,
}

Object.keys(obj).forEach(key => {
  let value = obj[key]

  Object.defineProperty(obj, key, {
    get: function () {
      console.log(`监听到${key}属性被访问`)
      return value
    },
    set: function (newValue) {
      console.log(`监听到${key}属性被访问`)
      value = newValue
    },
  })
})

obj.name = 'coder'
obj.age = 1

console.log(obj.name)
console.log(obj.age)
