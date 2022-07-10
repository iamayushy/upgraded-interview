class Person{
    constructor(fname, lname){
        this.fname = fname
        this.lname = lname
    }

    getFullName(){
        return this.fname +' '+ this.lname
    }
}
const P1 = new Person('Kala', 'Kuala')

class SuperHero extends Person{
    constructor(fname, lname, power){
        super(fname, lname)
        this.power = power
    }
    hasPower(){
        console.log(`I have the power of ${this.power} gh`)
    }
}
const s1 = new SuperHero('Karla', 'Shukla', 2900)
s1.hasPower()
console.log(s1.getFullName())
