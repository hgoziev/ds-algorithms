function maxSumIncreasingSubsequence(array) {
    const numOfElements = new Array(array.length).fill(null)
    const sums = array.slice(0)
    let maxIdx = 0
    for (let i = 0; i < array.length; i++) {
        const currentNum = array[i]
        for (let j = 0; j < i; j++) {
            const otherNum = array[j]
            const currentSum = sums[j] + currentNum
            if (otherNum < currentNum && currentSum >= sums[i]) {
                sums[i] = currentSum
                numOfElements[i] = j
            }
        }
        if (sums[i] >= sums[maxIdx]) maxIdx = i
    }
    const seq = buildSequence(array, numOfElements, maxIdx)
    console.log([sums[maxIdx], seq]);
}
function buildSequence(array, numOfElements, currentMaxIdx) {
    const seq = []
    while (currentMaxIdx) {
        seq.unshift(array[currentMaxIdx])
        currentMaxIdx = numOfElements[currentMaxIdx]
    }
    return seq
}
const arr = [10, 70, 20, 30, 50, 11, 30]
maxSumIncreasingSubsequence(arr)