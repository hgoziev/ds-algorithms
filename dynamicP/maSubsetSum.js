//maximum sum of non-adjacent elements in the given array 
function maxSubsetSum(array) {
    //O(n) time | O(n) space
    if (!array.length) return 0
    if (array.length === 1) return array[0]
    let maxSums = array.slice()
    maxSums[1] = Math.max(array[0], array[1])
    for (let i = 2; i < array.length; i++) {
        maxSums[i] = Math.max(maxSums[i - 1], maxSums[i - 2] + array[i])
    }
    return maxSums[maxSums.length - 1]
}

function maxSubsetSum2(array) {
    //o(n) time | O(1) space
    if (!array.length) return 0
    if (array.length === 1) return array[0]

    let second = array[0]
    let first = Math.max(array[0], array[1])

    for (let i = 2; i < array.length; i++) {
        let current = Math.max(first, second + array[i])

        second = first
        first = current
    }
    return first
}