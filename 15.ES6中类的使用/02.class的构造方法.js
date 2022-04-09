class Person {
  // 构造函数
  // 注意: 一个类只有一个构造函数
  constructor(name, age, address) {
    this.name = name
    this.age = age
    this._address = address
  }

  // 实例方法
  eating() {
    console.log(this.name + '  eating')
  }

  // 类的访问器
  get address() {
    return this._address
  }

  set address(newAddress) {
    this._address = newAddress
  }

  // 类方法，可通过类直接调用
  static random() {
    console.log(Math.random())
  }
}

let p = new Person('wkb', 12, 'yyy')

p.eating()
console.log(p.address)
p.address = 'hhh'
console.log(p.address)

Person.random()
