class Node {
    constructor(value) {
        this.value = value
        this.next = null
        this.prev = null
    }
}

class DList {
    constructor() {
        this.head = null
        this.tail = null
    }


    insert(key, value) {
        const node = new Node({ [key]: value })
        if (this.head === null) {
            this.head = node
            this.tail = node
        } else {
            this.setHead(node)
        }
    }
    updateRecent(key, value) {
        let current = this.head
        while (!(key in current.value)) {
            current = current.next
        }
        if (key in current.value && current.value[key] !== value) {
            this.remove(key)
            const node = new Node({ [key]: value })
            this.setHead(node)
        }
    }
    updateTail() {
        let keyToRemove = this.tail
        this.tail = this.tail.prev
        this.tail.next = null
        return keyToRemove.value
    }
    remove(key) {
        let current = this.head
        while (current && !(key in current.value)) {
            current = current.next
        }

        if (key in current.value) {
            if (current.next !== null) {
                current.next.prev = current.prev
            } else {
                this.tail = current.prev
                current.prev.next = null
            }
            if (current.prev !== null) {
                current.prev.next = current.next
            } else { this.head = current.next }

        }
    }
    setHead(node) {
        node.next = this.head
        this.head.prev = node
        this.head = node
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
function showNodesRerverse(tail) {
    let current = tail
    let arr = []
    while (current) {
        arr.push(current.value)
        current = current.prev
    }
    console.log(arr);

}
class LRU {
    constructor(maxSize) {
        this.maxSize = maxSize || 1
        this.hashTable = {}
        this.size = 0
        this.recentlyUsedList = new DList()
    }
    evictLast() {
        const valueToRemoe = this.recentlyUsedList.updateTail()
        const key = Object.keys(valueToRemoe)
        delete this.hashTable[key[0]]
    }
    insert(key, value) {
        if (!this.hashTable[key]) {
            if (this.maxSize === this.size) {
                this.evictLast()
            }
            this.recentlyUsedList.insert(key, value)
            this.hashTable[key] = value
            this.size++
        } else {
            this.hashTable[key] = value
            this.recentlyUsedList.updateRecent(key, value)
        }
    }
    getHead() {
        return this.recentlyUsedList.head
    }
    getMostRecentKey() {
        if (this.recentlyUsedList.head) {
            let key = Object.keys(this.recentlyUsedList.head.value)
            return key[0]
        }
        return null
    }
    getValueFromKey(key) {
        if (this.hashTable[key]) {
            return this.hashTable[key]
        }
        return null;;
    }
    getRecentlyUsed() {
        return this.recentlyUsedList.head ? this.recentlyUsedList.head.value : null
    }
}


const lru = new LRU(3)
lru.insert('a', 20)
lru.insert('b', 30)
lru.insert('c', 200)
lru.insert('g', 389)
const head = lru.getHead()
showNodes(head)
console.log(lru.hashTable);