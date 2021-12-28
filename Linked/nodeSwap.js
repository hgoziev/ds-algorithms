
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
}

function showNodes(head) {
    let current = head
    let arr = []
    while (current) {
        arr.push(current.value)
        current = current.next
    }
    console.log(arr)
}
function nodeSwapRecursive(head) {
    if (!head || !head.next) return head

    let nextNode = head.next
    head.next = nodeSwapRecursive(head.next.next)
    nextNode.next = head

    return nextNode
}

function nodeSwap(head) {
    let tempNode = new Node(0)
    tempNode.next = head
    let prev = tempNode

    while (prev.next && prev.next.next) {
        let firstNode = prev.next
        let secondNode = prev.next.next

        // swap 
        firstNode.next = secondNode.next
        secondNode.next = firstNode

        prev.next = secondNode //secondNode is now firstnode
        prev = firstNode
    }
    return tempNode.next
}

const list = new LinkedList()
const arr = [0, 1, 2, 3, 4,]
arr.forEach(n => list.insert(n))
showNodes(list.head)
const head = nodeSwap(list.head)
showNodes(head)
