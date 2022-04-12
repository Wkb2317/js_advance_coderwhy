const obj = {
  name: 'why',
  age: 18,
}

const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    console.log('-----get------')
    return Reflect.get(target, key)
  },

  set(target, key, newValue, receiver) {
    console.log('-----set------')
    return Reflect.set(target, key, newValue)
  },
})

objProxy.name = 'kobe'
console.log(objProxy.name)
