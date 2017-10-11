const obj = {
  val: 4,
  timesTwo: function (num) {
    this.val = num
    return this.val * 2
  },
  timesThree: function () {
    return this.val * 3
  }
}

// connected
const y = obj.timesThree()
// disconnected
const newTimesThree = obj.timesThree
const x = newTimesThree()

console.log('connected', y)
console.log('disconnected', x)

function func (num) {
  return this.timesTwo(num)
}

// const result = obj.timesTwo()
// console.log(result)

// const r = func.apply(obj, [5])
// console.log(r)

// const newFunc = func.bind(obj, 4)
// const newResult = newFunc()
// console.log(newResult)

const newFunc = func.bind(obj)
const newResult = newFunc(4)
// console.log(newResult)
