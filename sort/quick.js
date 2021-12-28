function quickSort(array, k) {
    sortArray(array, startIdx = 0, endIdx = array.length - 1)
    console.log(array);
    return array
}
function sortArray(array, startIdx, endIdx) {
    if (startIdx >= endIdx) return

    const pivotIdx = startIdx
    let leftIdx = startIdx + 1
    let rightIdx = endIdx

    while (rightIdx >= leftIdx) {
        if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
            swap(leftIdx, rightIdx, array)
        }
        if (array[leftIdx] <= array[pivotIdx]) leftIdx++
        if (array[rightIdx] >= array[pivotIdx]) rightIdx--
    }
    swap(pivotIdx, rightIdx, array)

    const isLeftSmaller = rightIdx - 1 - startIdx < endIdx - (rightIdx + 1)
    if (isLeftSmaller) {
        sortArray(array, startIdx, rightIdx - 1)
        sortArray(array, rightIdx + 1, endIdx)
    } else {
        sortArray(array, rightIdx + 1, endIdx)
        sortArray(array, startIdx, rightIdx - 1)
    }
}
function swap(leftIdx, rightIdx, array) {
    const temp = array[leftIdx]
    array[leftIdx] = array[rightIdx]
    array[rightIdx] = temp
}
const arr = [4, 9, 14, 8, 1, 6, 2, 3, 0,]
const k = 2
quickSort(arr, k)