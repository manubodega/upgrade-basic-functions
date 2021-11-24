const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    let total = 0
    let promedio = 0
    for(var i = 0; i < param.length; i++){
        if (typeof(param[i]) == 'string'){
            total += param[i].length
        }
        if (typeof(param[i]) == 'number'){
            total += param[i]
        }
    }
    promedio = total / (param.length)
    return(promedio)
}

var a = averageWord(mixedElements)
console.log(a)