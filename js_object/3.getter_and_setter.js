let person = {
  get name() {
    console.log('调用了get')
    return this._name  // 不可以用this.name, 因为会形成递归死循环
  },
  set name(val) {
    console.log('调用了set: ' + val);
    this._name = val
  }
}
person.name = 'why'
console.log(person.name)
