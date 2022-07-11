const arr = [1, 2, 3, 4, 7, 6, 8, 9, 10]

const even = arr.filter(ele => ele % 2 === 0)
console.log(even)

Array.prototype.mymap = function(cb) {
    let arr = []
    for(let i = 0; i < this.length; i++){
        arr.push(cb(this[i], this))
    }
    return arr
}

Array.prototype.myfilter = function(cb){
    let ans = []
    for(let i = 0; i < this.length; i++){
        if(cb(this[i])){
            ans.push(this[i])
        }
    }
    return ans
}

const even1 = arr.myfilter(ele => ele % 2 !== 0).mymap(ele => ele * 2)
console.log(even1)

