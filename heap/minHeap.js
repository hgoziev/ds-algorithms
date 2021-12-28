
function MinHeap() {
    let heap = []
    this.push = (value) => {
        heap.push(value)
        if (heap.length > 1) {
            let idx = heap.length - 1
            while (heap[idx] < heap[Math.floor((idx - 1) / 2)]) {
                const parentIdx = Math.floor((idx - 1) / 2)
                if (idx > 0) {
                    [heap[idx], heap[parentIdx]] = [heap[parentIdx], heap[idx]]
                    if (parentIdx > 0) idx = parentIdx
                } else {
                    break
                }

            }
        }
    }
    this.remove = () => {
        const smallest = heap[0]
        if (heap.length > 1) {
            heap[0] = heap.pop()
            if (heap.length === 2) {
                if (heap[0] > heap[1]) {
                    [heap[0], heap[1]] = [heap[1], heap[0]]
                }
                return smallest
            }

            let idx = 0
            let left = 2 * idx + 1
            let right = 2 * idx + 2
            while (heap[idx] > Math.min(heap[left], heap[right])) {
                if (heap[left] < heap[right]) {
                    [heap[idx], heap[left]] = [heap[left], heap[idx]]
                    idx = left
                } else {
                    [heap[idx], heap[right]] = [heap[right], heap[idx]]
                    idx = right
                }
                left = 2 * idx + 1
                right = 2 * idx + 2
                if (!heap[left] || !heap[right]) break
            }
        } else if (heap.length === 1) {
            heap = []
        } else {
            return null
        }
        return smallest
    }
    this.sort = () => {
        const arr = []
        while (heap.length > 0) {
            arr.push(this.remove())
        }
        return arr
    }
    this.getHeap = () => {
        return heap
    }
}


const arr = [3, 9, 2, 7, 1]
const min = new MinHeap()

arr.forEach((n) => min.push(n))
console.log(min.getHeap());
console.log(min.sort());