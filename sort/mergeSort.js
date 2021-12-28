function mergeSort(array) {
    if (array.length <= 1) return array

    const midIdx = Math.floor(array.length / 2)
    const left = mergeSort(array.slice(0, midIdx))
    const right = mergeSort(array.slice(midIdx))

    const result = merge(left, right)

    return result
}

function merge(arrayOne, arrayTwo) {
    let i = 0
    let j = 0
    const results = []
    while (i < arrayOne.length && j < arrayTwo.length) {
        if (arrayOne[i] < arrayTwo[j]) {
            results.push(arrayOne[i])
            i++
        } else {
            results.push(arrayTwo[j])
            j++
        }
    }

    if (arrayOne[i]) {
        const unaddedList = arrayOne.slice(i)
        results.push(...unaddedList)
    } else {
        const unaddedList = arrayTwo.slice(j)
        results.push(...unaddedList)
    }
    return results
}


const arr = [6, 1, 9, 4, 20, 3]
console.log(mergeSort(arr));