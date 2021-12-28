function heapSort(array) {
    buildMaxHeap(array)
    for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
        swap(0, endIdx, array)
        heapify(0, endIdx - 1, array)

    }
    console.log(array);
    return array
}

function buildMaxHeap(array) {
    const firstParentIdx = Math.floor((array.length - 1) / 2)
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
        heapify(currentIdx, array.length - 1, array)
    }
}

function heapify(currentIdx, endIdx, heap) {
    let left = currentIdx * 2 + 1
    while (left <= endIdx) {
        let right = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1
        let idxToSwap;
        if (right !== -1 && heap[right] > heap[left]) {
            idxToSwap = right
        } else {
            idxToSwap = left
        }
        if (heap[idxToSwap] > heap[currentIdx]) {
            swap(idxToSwap, currentIdx, heap)
            currentIdx = idxToSwap
            left = currentIdx * 2 + 1
        } else {
            return
        }
    }


}
function swap(i, j, array) {
    let temp = array[i]
    array[i] = array[j]
    array[j] = temp
}

const arr = [8, 5, 2, 9, 5, 6, 3]

heapSort(arr)