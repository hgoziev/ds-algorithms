class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
    }
    insert(value) {
        const node = new Node(value)
        if (this.head === null) {
            this.head = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
        }
    }
    display() {
        let arr = []
        let current = this.head
        while (current) {
            arr.push(current.value)
            current = current.next
        }
        console.log(arr);
    }
}

function shift(head, k) {
    let size = 1
    let tail = head

    while (tail.next) {
        tail = tail.next
        size++
    }

    let offset = Math.abs(k) % size
    if (offset === 0) return head

    let newTailPosition = k > 0 ? size - offset : offset
    let newTail = head
    for (let i = 1; i < newTailPosition; i++) {
        newTail = newTail.next
    }

    let newHead = newTail.next
    newTail.next = null
    tail.next = head
    head = newHead
    return head
}


function showNodes(head) {
    let current = head
    let arr = []
    while (current) {
        arr.push(current.value)
        current = current.next

    }
    console.log(arr);
}

const arr1 = [2, 6, 10, 12, 13]
const list1 = new LinkedList()
arr1.forEach((n) => list1.insert(n))
list1.display()
const head = shift(list1.head, -2)
showNodes(head)