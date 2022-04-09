const obj = {
  name: 'wkb',
  age: 18,
}

function objNameFn1() {
  console.log('objNameFn1')
}

function objNameFn2() {
  console.log('objNameFn2')
}

function objAgeFn1() {
  console.log('objAgeFn1')
}

function objAgeFn2() {
  console.log('objAgeFn2')
}

const map = new Map()
map.set('name', [objNameFn1, objNameFn2])
map.set('age', [objAgeFn1, objAgeFn2])
const weakMap = new WeakMap()
weakMap.set(obj, map)

obj.name = '123'
let objMap = weakMap.get(obj)
objMap.get('name').forEach(fn => {
  fn()
})
