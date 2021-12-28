class MinHeap {
    constructor() {
        this.heap = []
    }

    insert(value) {
        this.heap.push(value)
        if (this.heap.length > 1) {
            let idx = this.heap.length - 1
            while (this.heap[idx] < this.heap[Math.floor((idx - 1) / 2)]) {
                const parentIdx = Math.floor((idx - 1) / 2)
                if (idx > 0) {
                    [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]]
                    if (parentIdx > 0) idx = parentIdx
                } else {
                    break
                }

            }
        }
    }
    remove() {
        const smallest = this.heap[0].num
        if (this.heap.length > 1) {
            this.heap[0] = this.heap.pop()
            if (this.heap.length === 2) {
                if (this.heap[0] > this.heap[1]) {
                    [this.heap[0], this.heap[1]] = [this.heap[1], this.heap[0]]
                }
                return smallest
            }

            let idx = 0
            let left = 2 * idx + 1
            let right = 2 * idx + 2
            while (this.heap[idx].num > Math.min(this.heap[left].num, this.heap[right].num)) {
                if (this.heap[left].num < this.heap[right].num) {
                    [this.heap[idx], this.heap[left]] = [this.heap[left], this.heap[idx]]
                    idx = left
                } else {
                    [this.heap[idx].num, this.heap[right].num] = [this.heap[right].num, this.heap[idx].num]
                    idx = right
                }
                left = 2 * idx + 1
                right = 2 * idx + 2
                if (!this.heap[left] || !this.heap[right]) break
            }
        } else if (this.heap.length === 1) {
            this.heap = []
        } else {
            return null
        }
        return smallest
    }

    showHeap() {
        console.log(this.heap);
    }
    isEmpty() {
        return this.heap.length === 0
    }
    getLength() {
        return this.heap.length
    }

}


const arr = [
    [1, 5, 9, 21],
    [-1, 0],
    [-124, 81, 121],
    [3, 6, 12, 20, 150],
]

function mergeArrays(arrays) {
    const sortedList = []
    const smallestItems = []
    for (let arrayIdx = 0; arrayIdx < arrays.length; arrayIdx++) {
        smallestItems.push({
            arrayIdx, elIdx: 0, num: arrays[arrayIdx][0]
        })
    }
    const minHeap = new MinHeap()
    for (let i in smallestItems) {
        minHeap.insert(smallestItems[i])
    }
    minHeap.showHeap()

    while (minHeap.getLength()) {
        const { arrayIdx, elIdx, num } = minHeap.remove()
        sortedList.push(num)
        if (elIdx === arrays[arrayIdx]?.length - 1) continue
        minHeap.insert({
            arrayIdx,
            elIdx: elIdx + 1,
            num: arrays[arrayIdx][elIdx + 1]
        })

    }
    console.log(sortedList);
}


mergeArrays(arr)