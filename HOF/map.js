let arr  = [1, 2, 3, 4, 5,6]
let ans = arr.map(ele => ele * 2)

Array.prototype.mymap = function(cb) {
    let arr = []
    for(let i = 0; i < this.length; i++){
        arr.push(cb(this[i], this))
    }
    return arr
}

let np = arr.mymap(ele => ele * 2)
console.log(np)
