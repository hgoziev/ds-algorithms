function countConstruct(target, wordBank, memo = {}) {
    if (target in memo) return memo[target]
    if (target === '') return 1
    let count = 0
    for (const word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            count += countConstruct(suffix, wordBank, memo)
        }
    }
    memo[target] = count
    return count
}
function countConstructTabulation(targetStr, wordBank) {
    const table = new Array(targetStr.length + 1).fill(0)
    table[0] = 1

    for (let i = 0; i <= targetStr.length; i++) {
        for (const word of wordBank) {
            if (targetStr.slice(i, i + word.length) === word)
                table[i + word.length] += table[i]
        }

    }

    return table[targetStr.length]
}



console.log(countConstructTabulation('purple', ['purp', 'p', 'ur', 'le', 'purpl', 'bette', 'r']));