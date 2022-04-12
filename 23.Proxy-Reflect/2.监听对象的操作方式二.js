const obj = {
  name: 'wkb',
  age: 18,
}

const objProxy = new Proxy(obj, {
  // 获取值时的捕获器
  get: function (target, key) {
    console.log(`监听到${key}属性被访问`)
    return target[key]
  },

  // 设置值时的捕获器
  set: function (target, key, newValue) {
    console.log(`监听到${key}属性被设置`)
    target[key] = newValue
  },

  // 监听in操作
  has: function (target, key) {
    console.log(`监听到${key}属性的in操作`)
    return key in target
  },

  // 监听delete的捕获器
  deleteProperty: function (target, key) {
    console.log(`监听到${key}属性的删除`)
    delete target[key]
  },
})

// console.log(objProxy.name)
// console.log(objProxy.age)

// objProxy.name = 'coder'
// objProxy.age = 4

// console.log(obj.name)
// console.log(obj.age)

// console.log('name' in objProxy)

delete objProxy.name
