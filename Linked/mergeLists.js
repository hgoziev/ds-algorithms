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

function mergeLists(headOne, headTwo) {
    //BIG o(N+ M) |   O(1) space
    let pointerOne = headOne
    let pointerTwo = headTwo
    let prevPointer = null

    while (pointerOne && pointerTwo) {
        if (pointerOne.value < pointerTwo.value) {
            prevPointer = pointerOne
            pointerOne = pointerOne.next
        } else {
            if (prevPointer) {
                prevPointer.next = pointerTwo
            }
            prevPointer = pointerTwo
            pointerTwo = pointerTwo.next
            prevPointer.next = pointerOne
        }
    }
    if (pointerOne === null) {
        prevPointer.next = pointerTwo
    }
    return headOne.value < headTwo.value ? headOne : headTwo
}
function mergeListsRecursive(headOne, headTwo) {
    //BIG O(n+m) | O(n+m) space
    mergeRecursive(headOne, headTwo, null)
    return headOne.value < headTwo.value ? headOne : headTwo
}

function mergeRecursive(p1, p2, prev) {

    if (p1 === null) {
        prev.next = p2
        return
    }

    if (p2 === null) return

    if (p1.value < p2.value) {
        mergeRecursive(p1.next, p2, p1)
    } else {
        if (prev) {
            prev.next = p2
        }
        let nextP2 = p2.next
        p2.next = p1
        mergeRecursive(p1, nextP2, p2)
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

const arr1 = [2, 6,]
const arr2 = [1, 3, 4,]
const list1 = new LinkedList()
const list2 = new LinkedList()
arr1.forEach((n) => list1.insert(n))
arr2.forEach((n) => list2.insert(n))

// list1.display()
// list2.display()

const newHead = mergeListsRecursive(list1.head, list2.head)
showNodes(newHead)  