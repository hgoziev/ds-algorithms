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
function isPalindrome(head) {
    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }
    let reversed = reverse(slow)
    let current = head
    while (reversed && current) {
        if (reversed.value !== current.value) return false
        reversed = reversed.next
        current = current.next
    }

    return true

}
function isPalinRecursive(head) {

}
function recursivePalin()
function reverse(head) {
    let prev = null
    let curr = head
    while (curr) {
        let next = curr.next
        curr.next = prev
        prev = curr
        curr = next
    }
    return prev
}
const list = new LinkedList()
const arr = [0, 1, 2, 2, 1, 5]
arr.forEach(n => list.insert(n))
showNodes(list.head)
console.log(isPalindrome(list.head));