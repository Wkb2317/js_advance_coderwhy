class KBArray extends Array {
  firstItem() {
    return this[0]
  }

  lastItem() {
    return this[this.length - 1]
  }
}

let arr = new KBArray(1, 2, 4)
console.log(arr.firstItem())
console.log(arr.lastItem())
