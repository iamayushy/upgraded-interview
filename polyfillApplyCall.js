Function.prototype.myCall = function(context = {}, ...args){
  if(typeof this !== 'function'){
    throw new Error(this + 'Fuck')
  }
  context.fun = this
  return context.fun(...args)
}

Function.prototype.myApply = function(context = {},arg = []){
  if(typeof this !== 'function'){
    throw new Error(this + 'Fuck')
  }
  if(!Array.isArray(arg)){
    throw new Error(this + 'Bhai Array DE')
  }
  context.fun = this
  return context.fun(...arg)
}
