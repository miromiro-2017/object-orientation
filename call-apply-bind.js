const obj = {
  val: 4
}

function coolFunc (op1, op2) {
  return this.val + op1 + op2
}

const v1 = coolFunc.call(obj, 19, 30)
// call does this: obj.coolFunc(19, 30)
const v2 = coolFunc.apply(obj, [19, 30])
// apply does this: obj.coolFunc(19, 30)

const callCoolFunc = coolFunc.bind(obj, 19)
const v3 = callCoolFunc(30)
// callCoolFunc does this: obj.coolFunc(19, 30)

console.log(v1, v2, v3)
