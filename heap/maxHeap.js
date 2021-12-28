class MaxHeap {
    constructor() {
        this.heap = []
    }

    insert(value) {
        this.heap.push(value)
        if (this.heap.length > 1) {
            let idx = this.heap.length - 1
            let parentIdx = Math.floor((idx - 1) / 2)
            while (this.heap[idx] > this.heap[parentIdx]) {
                [this.heap[idx], this.heap[parentIdx]] = [this.heap[parentIdx], this.heap[idx]]
                if (parentIdx > 0) {
                    idx = parentIdx
                    parentIdx = Math.floor((idx - 1) / 2)
                } else {
                    break
                }
            }
        }
    }
    remove() {
        const max = this.heap[0]
        if (this.heap.length > 1) {
            this.heap[0] = this.heap.pop()
            if (this.heap.length === 2) {
                if (this.heap[0] < this.heap[1]) {
                    [this.heap[0], this.heap[1]] = [this.heap[1], this.heap[0]]
                }
                return max
            }
            let idx = 0
            let left = 2 * idx + 1
            let right = 2 * idx + 2
            while (this.heap[idx] < Math.max(this.heap[left], this.heap[right])) {
                if (this.heap[left] > this.heap[right]) {
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

        return max
    }
    getHeap() {
        return this.heap
    }
}




const arr = [3, 0, 9, 2, 7, 1]
const min = new MaxHeap()
arr.forEach(n => min.insert(n))
console.log(min.getHeap());
min.remove()
min.remove()
min.remove()
min.remove()
console.log(min.getHeap());
