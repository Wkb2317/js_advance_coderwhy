const nums = [
  10,
  20,
  [2, 3],
  [
    [20, 4, 7],
    [1, 2],
  ],
  [5, 6],
]

// 1. flat()
// 参数 层级，默认为1
// console.log(nums.flat())

// 2. flatMap()
const num2 = [1, 2, 3]
const num3 = num2.flatMap(item => {
  return item * 2
})
console.log(num3)

// flatMap的应用场景
const message = ['hello world', 'hello wkb']
const words = message.flatMap(item => {
  return item.split(' ')
})

console.log(words)
