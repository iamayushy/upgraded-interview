/*
1. I global execution context
    this refers to global object whether strict or not

*/
// 1. This points to global object in strict or not
console.log(this === window)

//2. In function context if not in strict mode this points to global window

function f1(){
    return this
}
console.log(f1() === window) // true

// 3. In strict mode it will return undefined
function f2(){
    'use strict'
    return this
}
console.log(f2()) // undefined becuse it needs to call as a method => some browsers did not support it
 // to set value to particular value when calling function use call and apply

 // 4. this changes how a function is called
const obj = {a: 'Main Giaon'}
const obj2 = {a: 'Main Giaon'}
 let  a = 'Global'
 function whatisThis(){
    return this.a
 }
//  console.log(whatisThis())
 console.log(whatisThis.call(obj) === whatisThis.apply(obj2))
 console.log(whatisThis.apply(obj2))

const fnc = (...ar) => {
    console.log(ar)
}

const goodFunc = (fn, init) => {
    let mine
    return (...args) => {
        const context = this
        const argu = args
        clearTimeout(mine)
        mine = setTimeout(() => {
            fn.apply(context, argu)
        }, init)
    }
}
const good  = goodFunc(() => fnc('ss', 'se3', '23'), 1000)

class Mu {
    constructor(){
        this.x = null
    }
    init = (num) => {
        this.x = num
        return this
    }
    add = (num) => {
        this.x += num
        return this
    }
    getSum = () => {
        return this.x
    }
}
const make = new Mu()

a1 = {b2: 11}
const ab = () => {
    'use strict'
    return this.a1
}
const funs = ab.bind(a1)
console.log(funs())

