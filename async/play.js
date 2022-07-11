function getInput(res){
    let ans = res.split('/n')
    console.log(ans)
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

readline.question('Enter Your Name', name =>{
    getInput(`
    \n`)
    readline.close()
})

