const info = {
  name: 'why',
  friend: { name: 'coder' },
}

const obj = { ...info }
console.log(obj)

// 浅拷贝,会影响拷贝对象
obj.friend.name = 'why'
console.log(info)
