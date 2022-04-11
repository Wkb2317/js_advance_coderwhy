// es11 之前
const maxInt = Number.MAX_SAFE_INTEGER
// console.log(maxInt)
// console.log(maxInt + 1)
// console.log(maxInt + 2) // 超出安全数字范围

//  es 11 之后， bigInt
const bigInt = 9007199254740991n

console.log(bigInt + 10n)

console.log(bigInt + BigInt(100))
