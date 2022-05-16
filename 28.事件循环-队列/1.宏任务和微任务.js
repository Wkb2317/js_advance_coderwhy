setTimeout(() => {
  console.log('setTimeout')
}, 1000)

queueMicrotask(() => {
  console.log('queueMicrotask')
})

Promise.resolve().then(res => {
  console.log('promise then')
})

function foo() {
  console.log('foo')
}

function bar() {
  foo()
  console.log('bar')
}

bar()

/**
 * script start
 * async1 start
 * async2
 * promise1
 * script end
 * async1 end
 * promise2
 * setTimeout
 */
