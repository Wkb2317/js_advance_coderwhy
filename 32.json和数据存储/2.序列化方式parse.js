const obj = {
  name: 'wkb',
  age: 12,
  hobbies: ['code', 'game'],
}

// replacer

const string = JSON.stringify(obj)

console.log(
  JSON.parse(string, (key, value) => {
    if (key === 'age') {
      return value - 1
    }
    return value
  })
)
