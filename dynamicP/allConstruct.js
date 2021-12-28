function allConstruct(target, wordBank, memo = {}) {
    if (target in memo) return memo[target]
    if (target === '') return [[]]

    const list = []
    for (const word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            const res = allConstruct(suffix, wordBank, memo)
            const targetWays = res.map(way => [word, ...way,])
            list.push(...targetWays)
        }
    }
    memo[target] = list
    return list
}

function allConstructTabulation(target, wordBank) {
    // VERY SLOW TIME 
    // M =  target.length   
    // N = wordBank.length 
    // O(n ** m) time  || O(n ** m) space
    const table = new Array(target.length + 1).fill().map(() => [])

    table[0] = [[]]

    for (let i = 0; i <= target.length; i++) {
        for (const word of wordBank) {
            if (target.slice(i, i + word.length) === word) {
                const combinatoin = table[i].map(subarray => [...subarray, word])
                table[i + word.length].push(...combinatoin)
            }
        }
    }
    console.log(table[target.length]);
    return table[target.length]
}


// console.log(allConstruct('eeeeeeeee', ['ee', 'eee']));
allConstructTabulation('purple', ['purpl', 'p', 'ur', 'le',])
