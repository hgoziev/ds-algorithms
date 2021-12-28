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
    console.log(arr);
}

function zip(head, k) {
    if (!head.next) return head

    let firstHalf = head
    let secondHalf = splitList(head)
    let reversedSecondHalf = reverseList(secondHalf)
    let finalConnectHead = connectLists(firstHalf, reversedSecondHalf)
    return finalConnectHead
}
function connectLists(headOne, headTwo) {
    let listOne = headOne
    let listTwo = headTwo

    while (listOne && listTwo) {
        let savedListOneNext = listOne.next
        let savedListTwoNext = listTwo.next
        listOne.next = listTwo
        listTwo.next = savedListOneNext
        listOne = savedListOneNext
        listTwo = savedListTwoNext
    }
    return headOne
}
function splitList(head) {
    let slow = head
    let fast = head
    while (fast && fast.next) {
        fast = fast.next.next
        slow = slow.next
    }
    let secondHalf = slow.next
    slow.next = null
    return secondHalf
}

function reverseList(head) {
    let newHead = null
    let current = head
    while (current) {
        let next = current.next
        current.next = newHead
        newHead = current
        current = next
    }

    return newHead
}


const arr = [1, 2, 3, 4, 5, 6]
const list = new LinkedList()
arr.forEach((n) => list.insert(n))

showNodes(list.head)
const head = zip(list.head)
showNodes(head)