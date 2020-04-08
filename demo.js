function box(){
    var age = 100
    return function(){
        return age
    }
}
console.log(box()())