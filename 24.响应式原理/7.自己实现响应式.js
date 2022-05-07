let activeFn = null // 存储当前被掉用函数
const targetMap = new WeakMap() // 存储target和map对象关系

class Depend {
  constructor() {
    this.reactiveFn = new Set()
  }

  addDepend() {
    if (activeFn) {
      this.reactiveFn.add(activeFn)
    }
  }

  notify() {
    this.reactiveFn.forEach(fn => {
      fn()
    })
  }
}

/**
 * @description:  获取key对应的depend对象
 * @param {*}
 * @return {*}
 */
function getDepend(target, key) {
  // 获取target对应的map对象
  let map = targetMap.get(target)
  // 如果没有获取到map,就手动添加空map
  if (!map) {
    map = new Map()
    targetMap.set(target, map)
  }

  // 根据key获取map对象中的depen对象
  let depend = map.get(key)
  // 如果没有获取到depend,就手动添加depend
  if (!depend) {
    depend = new Depend()
    map.set(key, depend)
  }
  return depend
}

/**
 * @description: 返回代理对象
 * @param {*} obj
 * @return {*} proxyObj
 */
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key, receiver) {
      const depend = getDepend(target, key)
      depend.addDepend()
      return Reflect.get(target, key, receiver)
    },
    set(target, key, newValue, receiver) {
      Reflect.set(target, key, newValue, receiver)
      const depend = getDepend(target, key)
      depend.notify()
    },
  })
}

/**
 * @description:  观察回调函数，执行回调函数
 * @param {*} fn
 * @return {*}
 */
function watchFn(fn) {
  activeFn = fn
  fn()
  activeFn = null
}

const info = {
  name: 'wkb',
  age: 12,
}

const infoProxy = reactive(info)

watchFn(() => {
  console.log(infoProxy.age, '......')
})

infoProxy.age = 18
