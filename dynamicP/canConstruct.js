// write a function that accepts a target string and array of strings
// the function should return boolen indicating whether or not 
// the target can be constructed by concatening elements of the word bank array


function canConstruct(target, wordBank) {
    //m = target.length
    //n =  wordbank.length
    //0(n**m * m) time | O(m ** 2) space
    if (target === '') return true
    for (const word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            if (canConstruct(suffix, wordBank) === true) {
                return true
            }
        }
    }
    return false
}
function canConstructOptimal(target, wordBank, memo = {}) {
    //m = target.length
    //n =  wordbank.length
    //0(n*m ** 2) time | O(m ** 2) space
    if (target in memo) return memo[target]
    if (target === '') return true
    for (const word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            if (canConstructOptimal(suffix, wordBank, memo) === true) {
                memo[target] = true
                return true
            }
        }
    }
    memo[target] = false
    return false
}
function canConstructTabulation(target, wordBank) {
    const table = new Array(target.length + 1).fill(false)
    table[0] = true
    for (let i = 0; i <= target.length; i++) {
        if (table[i]) {
            for (const word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true
                }
            }
        }
    }
    return table[target.length]
}
console.log(canConstructTabulation('abcadsfd', ['ab', 'abc', 'cd', 'def', 'abcd']));