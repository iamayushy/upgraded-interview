/*
The process in functional programming in which we transform a function
with multiple arguments into a sequence of nesting functions that
take one argument at a time.
*/

function one(a){
    return function two(b){
        return function three(c){
            return a + b + c
        }
    }
}
// console.log(one(1)(2)(3))

