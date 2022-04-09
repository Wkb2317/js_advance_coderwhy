const names = ['abc', 'cab', '111', '222', NaN]

// if (names.indexOf('222') !== -1) {
//   console.log('包含')
// }

// es7
// if (names.includes('111', 2)) {
//   console.log('包含')
// }

if (names.indexOf(NaN) !== -1) {
  console.log('包含')
} else {
  console.log('不包含')
}

if (names.includes(NaN)) {
  console.log('包含')
}
