function canSum(targetSum, numbers) {
    //O(length of array ** targetSum) time | O(targetSum) space
    if (targetSum === 0) return true
    if (targetSum < 0) return false
    for (let num of numbers) {
        const remainderSum = targetSum - num
        if (canSum(remainderSum, numbers) === true) return true
    }
    return false
}

function canSumOptimal(targetSum, numbers, memo = {}) {
    // m = targetSum 
    // n = array length 
    //O(n*m) time | O(m) space

    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return true
    if (targetSum < 0) return false

    for (let num of numbers) {
        const remainderSum = targetSum - num
        if (canSumOptimal(remainderSum, numbers, memo) === true) {
            memo[targetSum] = true
            return true
        }
    }
    memo[targetSum] = false
    return false
}

function canSumTabulation(target, numbers) {
    // m = targetSum 
    //n =  numbers.length 
    // O(mn) time | O(m)space

    const table = new Array(target + 1).fill(false)
    table[0] = true

    for (let i = 0; i <= target; i++) {
        if (table[i]) {
            for (const num of numbers) {
                table[i + num] = true
            }
        }
    }
    return table[target]

}


canSumTabulation(7, [5, 3, 4])
// console.log(canSumOptimal(300, [7, 14]));