// Kadane's algorithm is used to get max  or min sum of subarray additions


function maxSubArray(array) {
    let maxEndingHere = array[0]
    let maxSoFar = array[0]
    for (let i = 1; i < array.length; i++) {
        maxEndingHere = Math.max(maxEndingHere + array[i], array[i])
        maxSoFar = Math.max(maxEndingHere, maxSoFar)
    }
    return maxSoFar
}