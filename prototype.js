function person(firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
}
const p1 = new person('Ayush', 'Yadav')
const p2 = new person('Akash', 'Yadav')
const g1 = new person('Karkin', 'Belapur')

// This will be applicable for all the persons
person.prototype.getfullName = function(){
    return this.firstName +' '+this.lastName
}

function superHero(fname, lname){
    this.isSuperHero = true

    person.call(this, fname, lname)
}
superHero.prototype.fightCrime  = function(){

    console.log('Fight Crime')
}
superHero.prototype = Object.create(person.prototype)

const BatMan = new superHero('Kareem' ,  'Khan')
superHero.prototype.constructor = superHero
console.log(BatMan.getfullName())
