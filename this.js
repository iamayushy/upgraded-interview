/*
The js "this" keyword which is used in a function, refers to the
object it belongs to it makes functions reusable by letting you decide the
object value this value is determined entirely by how a function is
called.
*/

// implicit binding
globalThis.name = 'Superman'
const person = {
    name: 'Ayush',

    sayName : function(){
        console.log(this.name)
    }

}
// explicit binding
function sayMyName(){
    console.log(`My Name is ${this.name}`) // when nothing find it looks in globale

}

sayMyName.call(person)

// new binding

function Person(name){
    this.name = name
}
const p1 = new Person('Ayush Yadav')

console.log(p1.name)

// Default binding
sayMyName()


// Prority
// new binding > explicit binding > implicit binding > default


const child = {
    surname : 'Singham',

    playMachine: () => {
        console.log(`My name is ${surname} ${this.surname}`)
    }
}
child.playMachine()
