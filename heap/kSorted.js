

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
        const smallest = this.heap[0]
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
            while (this.heap[idx] > Math.min(this.heap[left], this.heap[right])) {
                if (this.heap[left] < this.heap[right]) {
                    [this.heap[idx], this.heap[left]] = [this.heap[left], this.heap[idx]]
                    idx = left
                } else {
                    [this.heap[idx], this.heap[right]] = [this.heap[right], this.heap[idx]]
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

function sortK(array, k) {
    const minHeap = new MinHeap()
    const results = []
    for (let i = 0; i < Math.min(k + 1, array.length); i++) {
        if (array[i]) minHeap.insert(array[i])
    }
    for (let i = k + 1; i < array.length; i++) {
        results.push(minHeap.remove())
        minHeap.insert(array[i])
    }

    let i = minHeap.getLength()
    while (i > 0) {
        results.push(minHeap.remove())
        i--
    }
    console.log(results);
}
const arr = [6, 5, 3, 2, 8, 10, 9]
const k = 3
sortK(arr, k)

