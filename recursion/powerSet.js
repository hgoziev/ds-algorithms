function powerset(array) {
    let subsets = [[]]
    for (let i = 0; i < array.length; i++) {
        let length = subsets.length
        for (let j = 0; j < length; j++) {
            let currentSubset = subsets[j]
            subsets.push(currentSubset.concat([array[i]]))
        }
    }
    return subsets
}
function powersetRecursive(array, idx = null) {
    if (idx === null) {
        idx = array.length - 1
    }

    if (idx < 0) {
        return [[]]
    }

    const currElement = array[idx]
    const subset = powersetRecursive(array, idx - 1)
    const length = subset.length
    for (let i = 0; i < length; i++) {
        const currentSubset = subset[i]
        subset.push(currentSubset.concat(currElement))
    }
    return subset
}
const arr = [1, 2, 3]
powersetRecursive(arr)