const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
function removeDuplicates(param) {
    for (var i = 0; i < param.length; i++){
        for (var j = i + 1; j < param.length; j++){
            if (param[i] == param[j]){
                param.splice(j,1)
            }
        }
    }
    return(param)
}
var a = removeDuplicates(duplicates)
console.log(a)