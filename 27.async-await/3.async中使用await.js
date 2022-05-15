function request(url) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // resolve(url)
      reject(url)
    }, 2000)
  })
}

async function foo() {
  const res = await request('aaa')
  console.log(res)
  console.log('----------')
}

foo().catch(res => {
  console.log('err:', res)
})
