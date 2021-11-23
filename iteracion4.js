const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let total = 0
    let media = 0
    for (var i = 0; i<param.length; i++){
        total += param[i]
    }
    media = total / (param.length - 1)
    return(media)
}
var a = average(numbers)
console.log(a)