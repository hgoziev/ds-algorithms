function quickSelect(array, k) {
    return quickHelper(array, 0, array.length - 1, k - 1)
}

function quickHelper(array, startIdx, endIdx, position) {
    while (startIdx <= endIdx) {
        const pivotIdx = startIdx
        let leftIdx = startIdx + 1
        let rightIdx = endIdx
        while (leftIdx <= rightIdx) {
            if (array[pivotIdx] < array[leftIdx] && array[pivotIdx] > array[rightIdx]) {
                swap(leftIdx, rightIdx, array)
            }
            if (array[pivotIdx] >= array[leftIdx]) leftIdx++
            if (array[pivotIdx] <= array[rightIdx]) rightIdx--
        }
        swap(pivotIdx, rightIdx, array)

        if (rightIdx === position) {
            return array[rightIdx]
        } else if (rightIdx < position) {
            startIdx = rightIdx + 1
        } else {
            endIdx = rightIdx - 1
        }
    }
}
function swap(left, right, array) {
    const temp = array[left]
    array[left] = array[right]
    array[right] = temp
}


const array = [8, 5, 2, 9, 7, 6, 3]
const k = 3

console.log(quickSelect(array, k));