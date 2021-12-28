function BinarySearch(array, target) {
    let startIdx = 0
    let endIdx = array.length - 1
    while (startIdx <= endIdx) {
        let midIdx = Math.floor((startIdx + endIdx) / 2)

        if (array[midIdx] === target) return midIdx

        else if (target > array[midIdx]) {
            startIdx = midIdx + 1
        }
        else if (target < array[midIdx]) {
            endIdx = midIdx - 1
        }

    }
    return -1
}

const arr = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73]
const target = 33
console.log(BinarySearch(arr, target))