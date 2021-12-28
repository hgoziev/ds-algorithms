function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let j = i + 1
        let minIdx = i
        while (j < array.length) {
            if (array[j] < array[minIdx]) {
                minIdx = j
            }
            j++
        }

        swap(minIdx, i, array)

    }
    console.log(array);
    return array
}

function swap(minimum, i, array) {
    let minTemp = array[minimum]
    array[minimum] = array[i]
    array[i] = minTemp
}

const arr = [4, 2, 7, 3, 9, 1, 2]
selectionSort(arr)