// Promise.all() => combines all promises and then return the data
/*
When an error occur then so it return error

*/
const promise1 = Promise.resolve(5)
const promise2 = 3
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('120 fuck')
    }, 100)
})

Promise.allSettled([promise1, promise2, promise3])
.then((ans) => console.log(ans))
.catch((err) => console.log(err))

// Promise.all => gives all result only if it is settled => If error encontered then returns error
// Promise.allSettled => gives settled resopnse and error also in form of array of objects.
// Promise.race => it returns whichever promise settled or rejected faster and return that promise.

