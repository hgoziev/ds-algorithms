function howSum(targetSum, numbers) {
    if (targetSum === 0) return []
    if (targetSum < 0) return null

    for (const num of numbers) {
        const remainder = targetSum - num
        const remainderResult = howSum(remainder, numbers)
        if (remainderResult !== null) {
            remainderResult.push(num)
            return remainderResult
        }
    }
    return null
}

function howSumOptimal(targetSum, numbers, memo = {}) {

    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return []
    if (targetSum < 0) return null

    for (const num of numbers) {
        const remainder = targetSum - num
        const remainderResult = howSumOptimal(remainder, numbers, memo)
        if (remainderResult !== null) {
            remainderResult.push(num)
            memo[targetSum] = remainderResult
            return remainderResult
        }
    }
    memo[targetSum] = null
    return null
}

function howSumTabulation(target, numbers) {

    // m = target
    // n = numbers.length 
    //O(m ** 2 * n) time | O(m**2) space

    const table = new Array(target + 1).fill(null)
    table[0] = []
    for (let i = 0; i <= target; i++) {
        if (table[i]) {
            for (const num of numbers) {
                table[i + num] = [...table[i], num]
            }
        }
    }

    return table[target]
}
console.log('7', howSumTabulation(7, [2, 4]));
console.log('7', howSumTabulation(7, [5, 3, 4, 7]));
console.log('300', howSumTabulation(300, [7, 14]));
