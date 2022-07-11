const employee = {
    name :'Jarvis',
    designation : 'Developer',

    set setPosition(pos){
        this.designation = pos
    },

    get getPostion(){
        return this.designation
    }
}
console.log(employee)
employee.setPosition = 'Manager'
console.log(employee)
console.log(employee.getPostion)
