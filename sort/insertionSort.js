function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let j = i
        while (j > 0 && array[j] < array[j - 1]) {
            [array[j - 1], array[j]] = [array[j], array[j - 1]]
            j--
        }
    }
    console.log(array);
    return array
}


const arr = [9, 2, 5, 1, 0, 4, 7, 3]

insertionSort(arr)