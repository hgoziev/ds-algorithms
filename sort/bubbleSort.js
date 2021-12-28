function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length - i; j++) {
            if (array[j] > array[j + 1]) {
                swap(j, j + 1, array)
            }
        }
    }
    console.log(array);
    return array
}

function swap(left, right, array) {
    let temp = array[right]
    array[right] = array[left]
    array[left] = temp
}

const arr = [6, 1, 9, 3, 4, 0]
bubbleSort(arr)