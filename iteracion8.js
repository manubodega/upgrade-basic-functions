const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];
function repeatCounter(param) {
    let repeticiones = []
    for (var i = 0; i < param.length; i++){
        repeticiones[i] = 1
        for (var j = i + 1; j < param.length; j++){
            if (param[i] == param[j]){
                repeticiones[i] += 1
                param.splice(j,1)
            }
        }
    }
    return [param,repeticiones]
}
var a = repeatCounter(counterWords)
console.log(a)