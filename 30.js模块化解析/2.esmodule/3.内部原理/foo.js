export function foo() {
  return 'foo'
}

let name = 'wkb'

setTimeout(() => {
  name = 'aaa'
}, 1000)

export { name }
