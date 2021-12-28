function subarraySort(array) {
    let minInSubArray = Infinity
    let maxInSubArray = -Infinity

    for (let i = 0; i < array.length; i++) {
        const current = array[i]
        if (isOutOfOrder(i, current, array)) {
            minInSubArray = Math.min(minInSubArray, current)
            maxInSubArray = Math.max(maxInSubArray, current)
        }
    }

    if (maxInSubArray === -Infinity || minInSubArray === Infinity) {
        return [-1, -1]
    }

    let subLeftIdx = 0
    while (minInSubArray >= array[subLeftIdx]) {
        subLeftIdx++
    }
    let subRightIdx = array.length - 1
    while (maxInSubArray <= array[subRightIdx]) {
        subRightIdx--
    }

    return [subLeftIdx, subRightIdx]
}

function isOutOfOrder(index, currentVal, array) {
    if (index === 0) {
        return currentVal > array[index + 1]
    }

    if (index === array.length - 1) {
        return currentVal < array[index - 1]
    }

    return currentVal > array[index + 1] || currentVal < array[index - 1]
}


const array = [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]

console.log(subarraySort(array));