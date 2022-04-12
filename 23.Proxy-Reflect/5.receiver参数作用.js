const obj = {
  _name: 'why',
  get name() {
    return this._name
  },
  set name(newValue) {
    this._name = newValue
  },
}

const objProxy = new Proxy(obj, {
  get(target, key, receiver) {
    // console.log(target === obj)
    // console.log(receiver === objProxy)

    // receiver可以改变this的指向
    console.log('get被访问-----  ', key)
    return Reflect.get(target, key, receiver)
  },

  set(target, key, newValue, receiver) {
    Reflect.set(target, key, newValue, receiver)
  },
})

console.log(objProxy.name)

objProxy.name = '123'

console.log(obj.name)
