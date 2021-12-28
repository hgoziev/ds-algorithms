function shiftedBinarySearch(array, target) {
    return shiftedSearchHelper(array, target, 0, array.length - 1)
}


function shiftedSearchHelper(array, target, left, right) {
    if (left > right) return -1

    let middle = Math.floor((left + right) / 2)
    if (array[middle] === target) return middle
    else if (array[left] <= array[middle]) {
        if (target >= array[left] && target < array[middle]) {
            return shiftedSearchHelper(array, target, left, middle - 1)
        } else {
            return shiftedSearchHelper(array, target, middle + 1, right)
        }
    } else {
        if (target > array[middle] && target <= array[right]) {
            return shiftedSearchHelper(array, target, middle + 1, right)
        } else {
            return shiftedSearchHelper(array, target, left, middle - 1)
        }
    }
}

function shiftedBinarySearchIterative(array, target) {
    let left = 0;
    let right = array.length - 1

    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if (array[middle] === target) return middle
        else if (array[left] <= array[middle]) {
            if (target < array[middle] && target >= array[left]) {
                right = middle - 1
            } else {
                left = middle + 1
            }
        } else {
            if (target > array[middle] && target <= array[right]) {
                left = middle + 1
            } else {
                right = middle - 1
            }
        }
    }
    return -1
}

const arr = [45, 61, 71, 72, 73, 0, 1, 21, 33, 37]
const target = 33

console.log(shiftedBinarySearchIterative(arr, target));