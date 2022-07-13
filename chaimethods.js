class chain {
  constructor() {
    this.num = 0
  }

  init(number) {
    this.num = number
    return this
  }

  add(number) {
    this.num += number
    return this
  }

  sub(number) {
    this.num -= number
    return this
  }

  get() {
    return this.num
  }
}
const counter = new chain()

const ans = counter.init(100).add(11).sub(1).get()
console.log(ans)
