const info = [
    {
        fname: 'Ayush',
        age: 23
    },
    {
        fname: 'Akash',
        age: 23
    },
    {
        fname:'Sunny',
        age: 24
    },
    {
        fname: 'Funny',
        age: 24
    },
    {
        fname: 'Funny',
        age: 24
    },
    {
        fname: 'Funny',
        age: 24
    }
]
const ans = info.reduce((acc, value) => {
    if(acc[value.age]){
        acc[value.age] = acc[value.age] + 1
    }
    else{
        acc[value.age] = 1
    }
    return acc
}, {})
console.log(ans)

Array.prototype.myreduce = function(cb, a){
    let acc = a
    for(let i = 0; i < this.length; i++){
        acc = acc ? cb(acc, this[i]) : this[i]
    }
    return acc
}
const an = info.myreduce((acc, value) => {
    if(acc[value.age]){
        acc[value.age] = acc[value.age] + 1
    }
    else{
        acc[value.age] = 1
    }
    return acc
}, {})
console.log(an)
