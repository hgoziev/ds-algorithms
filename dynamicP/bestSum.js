function bestSum(targetSum, numbers) {
    if (targetSum === 0) return []
    if (targetSum < 0) return null
    let shortest = null
    for (const num of numbers) {
        const remainder = targetSum - num
        const result = bestSum(remainder, numbers)
        if (result !== null) {
            result.push(num)
            if (shortest === null || result.length < shortest.length) {
                shortest = result
            }
        }
    }

    return shortest
}
function bestSumOptimal(targetSum, numbers, memo = {}) {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return []
    if (targetSum < 0) return null
    let shortest = null
    for (const num of numbers) {
        const remainder = targetSum - num
        const result = bestSumOptimal(remainder, numbers, memo)
        if (result !== null) {
            const combination = [...result, num]
            if (shortest === null || combination.length < shortest.length) {
                shortest = combination
            }
        }
    }
    memo[targetSum] = shortest
    return shortest
}

function bestSumTabulation(target, numbers) {
    const table = new Array(target + 1).fill(null)
    table[0] = []
    for (let i = 0; i <= target; i++) {
        if (table[i]) {
            for (const num of numbers) {
                const combination = [...table[i], num]
                if (!table[i + num] || table[i + num].length > combination.length) {
                    table[i + num] = combination
                }
            }
        }
    }
    return table[target]
}
console.log(bestSumTabulation(7, [5, 3, 4, 7]));
console.log(bestSumTabulation(100, [1, 2, 5, 25]));