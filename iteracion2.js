const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
function findLongestWord(param) {
    let maximo = param[0]
    for (var i = 0; i < param.length; i++){
        if (param[i].length > maximo.length){
            maximo = param[i]
        }
    }
    return (maximo)
}
var a = findLongestWord(avengers)
console.log(a)