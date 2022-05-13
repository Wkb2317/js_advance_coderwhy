// 第二个函数为了递归地狱
function deepClone(obj, map = new WeakMap()) {
  // 如果是null就不拷贝
  if (obj === null || obj === undefined) return obj
  // 如果不是对象，则返回
  if (typeof obj !== 'object') return obj
  // 如果这个对象已经拷贝过，则直接返回
  if (map.get(obj)) return map.get(obj)
  // 根据要拷贝的对象类型，new出拷贝空对象
  let cloneObj = new obj.constructor()
  map.set(obj, cloneObj)
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloneObj[key] = deepClone(obj[key], map)
    }
  }
  return cloneObj
}

let info = {
  name: 'wkb',
  friends: {
    name: 'aaa',
  },
}
info.info = info

let infoObj = deepClone(info)
info.friends.name = 'bbb'
console.log(info)
console.log(infoObj)
