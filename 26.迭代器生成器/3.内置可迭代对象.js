const names = ['aaa', 'bbb', 'ccc']
// console.log(names[Symbol.iterator])

const arrIterator = names[Symbol.iterator]()

console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())
console.log(arrIterator.next())

// string array map set arguments都是内置可迭代对象
