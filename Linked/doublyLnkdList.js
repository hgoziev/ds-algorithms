class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DLinkedList {
    constructor() {
        this.head = null
        this.tail = null
        this.size = 0
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
            node.prev = current
            this.tail = node
        }
    }
    insertBefore(element, value) {
        const node = new Node(value)
        const foundNode = this.findNode(element)
        if (foundNode) {
            let prev = foundNode.prev
            node.next = foundNode
            node.prev = prev
            prev.next = node
            foundNode.prev = node
        }
    }
    insertAfter(element, value) {
        const node = new Node(value)
        const foundNode = this.findNode(element)
        if (foundNode) {
            let next = foundNode.next
            node.prev = foundNode
            foundNode.next = node
            node.next = next
            next.prev = node
        }
    }
    insertAtIdx(idx, value) {
        const node = new Node(value)
        const foundNode = this.findNodeWithIdx(idx)
        if (foundNode) {
            let prev = foundNode.prev
            node.next = foundNode
            foundNode.prev = node
            node.prev = prev
            prev.next = node
        }

    }
    removeNode(value) {
        const foundNode = this.findNode(value)
        if (foundNode) {
            let prev = foundNode.prev
            if (foundNode.prev === null) {
                this.head = foundNode.next
                return;
            }
            prev.next = foundNode.next
            if (foundNode.next !== null) {
                foundNode.next.prev = prev
            }
        }
    }
    findNodeWithIdx(idx) {
        let current = this.head
        let idxCount = 1
        while (current) {
            if (idx === idxCount) return current
            current = current.next
            idxCount++
        }
        return null
    }
    findNode(value) {
        let current = this.head
        while (current) {
            if (current.value === value) return current
            current = current.next
        }
        return null
    }
    search(value) {
        const foundNode = this.findNode(value)
        return { found: true, value: foundNode.value }
    }
    display() {
        let current = this.head
        let list = []
        while (current) {
            list.push(current.value)
            current = current.next
        }
        console.log(list);
    }
    setHead(value) {
        const foundNode = this.findNode(value)
        if (foundNode) {
            let foundNext = foundNode.next
            let foundPrev = foundNode.prev
            if (foundNext !== null) {
                foundNext.prev = foundPrev
            }
            foundPrev.next = foundNext
            let head = this.head
            foundNode.next = head
            foundNode.prev = null
            head.prev = foundNode
            this.head = foundNode
        }
    }
    setTail(value) {
        const foundNode = this.findNode(value)
        if (foundNode) {
            let foundPrev = foundNode.prev
            let foundNext = foundNode.next
            if (foundPrev === null) {
                this.head = foundNext
            } else {
                foundPrev.next = foundNext
            }
            foundNext.prev = foundPrev

            let tail = this.tail
            foundNode.next = tail.next
            tail.next = foundNode
            foundNode.prev = tail
            this.tail = foundNode
        }
    }
}

const dList = new DLinkedList()
const arr = [1, 2, 3, 4,]
arr.forEach((n) => dList.insert(n))
dList.setTail(3)
dList.display()