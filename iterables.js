// for of loops
const str = 'zunxt'

// for(const char of str){
//     console.log(char)
// }
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// for(const item of arr){
//     console.log(item)
// }

// generators

function* generateFunction(){
    yield 'Hello'
    yield 'EOLD'
}
const obj = generateFunction()

for(const x of obj){
    console.log(x)
}
