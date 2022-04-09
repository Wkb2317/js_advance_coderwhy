let weakSet = new WeakSet()

// 1. 只能存储对象类型
// weakSet.add(1)
let person = { name: 'wkb' }
weakSet.add(person)

// 2. 对象是一个弱引用
console.log(weakSet)
// 例如
let set = new Set()
// set.add(person) // set对象中强引用person， 则person不会被垃圾回收
weakSet.add(person) // weakSet 中对person的引用是弱引用，则会被回收
person = null // person 指向null

// 3. 不能遍历

// 应用场景
let personWeakSet = new WeakSet()
class Person {
  constructor() {
    personWeakSet.add(this)
  }

  running() {
    if (!personWeakSet.has(this)) {
      throw Error('不能通过非构造函数方式调用')
    }
    console.log('running')
  }
}

const p = new Person()
p.running()

p.running.call({ name: 'wkb' })
