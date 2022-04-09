function createPerson (name, age) {
  let p = {}
  p.age = age
  p.name = name

  p.eating = function () {
    console.log(this.name + 'eating');
  }
  return p
}

let p1 = createPerson('wkb',23)
let p2 = createPerson('coder', 18)

// 工厂函数的缺点
// 每个对象的类型都是Object类型

