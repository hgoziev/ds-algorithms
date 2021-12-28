function searchForRange(array, target) {
    const finalRange = [-1, -1]
    findRange(array, target, finalRange, true)
    findRange(array, target, finalRange, false)
    return finalRange
}

function findRange(array, target, finalRange, goLeft) {
    let left = 0
    let right = array.length - 1
    while (left <= right) {
        let middle = Math.floor((left + right) / 2)
        if (array[middle] < target) {
            left = middle + 1
        } else if (array[middle] > target) {
            right = middle - 1
        } else {
            if (goLeft) {
                if (middle === 0 || array[middle - 1] !== target) {
                    finalRange[0] = middle
                    return
                } else {
                    right = middle - 1
                }
            } else {
                if (middle === array.length - 1 || array[middle + 1] !== target) {
                    finalRange[1] = middle
                    return
                } else {
                    left = middle + 1
                }
            }
        }
    }
}

function searchRangeRecursive(array, target) {
    const finalRange = [-1, -1]
    findRangeRecursive(array, target, 0, array.length - 1, finalRange, true)
    findRangeRecursive(array, target, 0, array.length - 1, finalRange, false)
    return finalRange
}
function findRangeRecursive(array, target, left, right, finalRange, goLeft) {
    if (left > right) return
    let mid = Math.floor((left + right) / 2)
    if (array[mid] > target) {
        findRangeRecursive(array, target, left, mid - 1, finalRange, goLeft)
    } else if (array[mid] < target) {
        findRangeRecursive(array, target, mid + 1, right, finalRange, goLeft)
    } else {
        if (goLeft) {
            if (mid === 0 || array[mid - 1] !== target) {
                finalRange[0] = mid
            } else {
                findRangeRecursive(array, target, left, mid - 1, finalRange, goLeft)
            }
        } else {
            if (mid === array.length - 1 || array[mid + 1] !== target) {
                finalRange[1] = mid
            } else {
                findRangeRecursive(array, target, mid + 1, right, finalRange, goLeft)
            }
        }
    }
}
const arr = [0, 1, 21, 33, 45, 45, 45, 45, 45, 45, 61, 71, 73]
const target = 45

console.log(searchRangeRecursive(arr, target));