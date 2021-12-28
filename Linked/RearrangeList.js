class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }
    insert(value) {
        const node = new Node(value)
        if (this.head === null) {
            this.head = node
            this.tail = node
        } else {
            let current = this.head
            while (current.next) {
                current = current.next
            }
            current.next = node
            this.tail = node
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
    console.log(arr);
}
function rearrange(head, k) {
    let smallHead = null
    let smallTail = null
    let equalHead = null
    let equalTail = null
    let bigHead = null
    let bigTail = null

    let current = head
    while (current) {
        if (current.value > k) {
            [bigHead, bigTail] = makeList(bigHead, bigTail, current)
        } else if (current.value < k) {
            [smallHead, smallTail] = makeList(smallHead, smallTail, current)
        } else {
            [equalHead, equalTail] = makeList(equalHead, equalTail, current)
        }
        let prev = current
        current = current.next
        prev.next = null
    }

    const [newHead, newTail] = connectLists(smallHead, smallTail, equalHead, equalTail)
    const [finalHead] = connectLists(newHead, newTail, bigHead, bigTail)


    return finalHead


}

function connectLists(headOne, tailOne, headTwo, tailTwo) {
    let newHead = headOne === null ? headTwo : headOne
    let newTail = tailTwo === null ? tailOne : tailTwo

    if (tailOne) {
        tailOne.next = headTwo
    }
    return [newHead, newTail]
}

function makeList(head, tail, node) {
    let newHead = head
    let newTail = node

    if (!head) {
        newHead = node
    }
    if (tail) {
        tail.next = newTail
    }

    return [newHead, newTail]
}

const arr = [3, 0, 5, 2, 1, 4]
const list = new LinkedList()
arr.forEach(n => list.insert(n))

showNodes(list.head)

const head = rearrange(list.head, 3)
showNodes(head)