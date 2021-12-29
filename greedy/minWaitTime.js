function minWaitTime(array) {
    // O(nlogn) time | O(1) space
    array.sort((a, b) => a - b)
    let totalTime = 0
    for (let i = 0; i < array.length; i++) {
        const duration = array[i]
        const queryLeft = array.length - (i + 1)
        totalTime += duration * queryLeft
    }

    return totalTime
}



const arr = [2, 3, 2, 1, 6]
console.log(minWaitTime(arr));