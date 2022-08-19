function goodFunction(fun, time){
    let run
    let called = 0
    return function(...args){
        const context = this
        clearTimeout(run)

        run = setTimeout(() => {
            fun.apply(context,args)
            called++
            console.log(called)
        }, time)
    }
}
