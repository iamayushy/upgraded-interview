// async & await


// aync function always return promise

// async function greet(){
//     return 'Hello'
// }
// greet().then((ans) => console.log(ans))
// await is only used in async function
// It maked js wait till the promise is returned
const gree = async() => {
   let int =  setInterval(() => {
        console.log('loading...')
    }, 1000)
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello'), 5000)
    })
    let res = await promise
    res ? clearInterval(int) : console.log(error)
    console.log(res)
}
// cuncurrent programme => runs the promise before and then call the result

function zello(){
    return new Promise((resolve, request) => {
        setTimeout(() =>{
            resolve('Hello')
        }, 2000)
    })
}
function helloWorld(){
    return new Promise((resolve, request) => {
        setTimeout(() =>{
            resolve('Hello World')
        }, 1000)
    })
}
// a concurrent method good way
async function callMe(){
    const hello = zello()
    const World = helloWorld()

    console.log(await hello)
    console.log(await World)
}

// sequential method => bad way

async function callMes(){
    const hello = await zello()
    const World = await helloWorld()

    console.log(hello)
    console.log(World)
}
// parallel execution // This will return whatever resolves first.

function parallel(){
    Promise.all([
        (async() => console.log(await zello()))(),
        (async() => console.log(await helloWorld()))()
    ])
}
parallel()
