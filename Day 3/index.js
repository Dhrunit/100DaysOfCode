/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const copy = `${x}`
    if(copy.length === 1){
        return true
    }
    let copyArray = []
    for(let i = 0; i < copy.length; i++){
        copyArray.push(copy[i])
    }
    copyArray = copyArray.reverse().join('')
    if(copy === copyArray){
        return true
    }
    return false
};