const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
function finderName(param, name) {
    let res = false
    let pos
    for (var i = 0; i < param.length; i++){
        if (name == param[i]){
            res = true
            pos = i + 1
        }
    }
    if (res == true){
        return [res,pos]
    }
    else {
        return [res]
    }
}
var a = finderName(nameFinder, "Clint")
console.log(a)
