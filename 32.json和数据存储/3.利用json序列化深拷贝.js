// json深拷贝
const obj = {
  name: 'wkb',
  age: 12,
  hobbies: ['code', 'game'],
  foo: function () {
    console.log('foo')
  },
}

let info = JSON.stringify(obj)
let info2 = JSON.parse(info)
obj.name = 'coder'
console.log(info2)
