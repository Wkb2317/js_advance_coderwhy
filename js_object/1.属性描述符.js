let person = {
	name: 'wkb'
}

Object.defineProperty(person, 'name', {
	configurable: false, // 属性是否可配置，true代表可以使用Object.defineProperty来修改属性描述符
	writable: true,  // 是否可修改
	enumerable: true,  // 是否可枚举
	value: 'wkb'
})

// console.log(person.name)  // wkb
// person.name = 'coder'  // 当writable为false，严格模式下会报错
// console.log(person.name);  // wkb

Object.defineProperty(person, 'name', {
  writable: true
})

person.name = 'coder'
console.log(person.name)  // 修改成功

// 在configurable为false的时候，可以把writable：true修改为false，反之报错
Object.defineProperty(person, 'name', {
  writable: false
})

// Object.defineProperty(person, 'name', {
//   writable: true  // 报错，在不可配置的情况下，只能由true修改为false
// })

Object.defineProperty(person, 'age', {
  configurable: true,
  writable: true,
  enumerable: false
})

for(let i in person){
  console.log(i,person[i]) // 只打印了name属性，因为age字段是不可枚举的
}

// Object.defineProperty只能一次定义一个对象的一个属性，如果想一次性定义一个对象的多个属性，则可用Object.defineProperties
let obj = {}
Object.defineProperties(obj, {
  name: {  // 其他属性不定义的情况下，默认为false
    value: 'wkb',
    enumerable: true
  },
  age: {
    value: 23,
    enumerable: true
  }
})
console.log(obj)



