class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class LinkedList {
    constructor() {
        this.head = null
        this.values = []
        this.hashTable = {}
    }

    insert(element) {
        let node = new Node(element);
        if (this.head == null)
            this.head = node;
        else {
            let current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }

    }
    display() {
        let current = this.head
        while (current !== null) {
            this.values.push(current.value);
            current = current.next
        }
        console.log(this.values);
    }
    removeDuplicates() {
        let current = this.head
        let set = new Set([current.value])
        while (current.next) {
            if (set.has(current.next.value)) {
                current.next = current.next.next
            } else {
                set.add(current.next.value)
                current = current.next
            }
        }
    }
    remove(value) {
        let current = this.head
        let prev;
        while (current) {
            if (current.value === value) {
                if (prev == null) {
                    this.head = current.next
                } else {
                    prev.next = current.next
                }
            }
            prev = current
            current = current.next
        }


    }
    find(value) {
        let current = this.head
        while (current) {
            if (current.value === value) return value
            current = current.next
        }
    }
    reverse() {
        let current = this.head
        let prev = null
        while (current) {
            let next = current.next
            current.next = prev
            prev = current
            current = next
        }

        this.head = prev
    }

}




const list = new LinkedList()
const arr = [1, 2, 3, 4]
arr.forEach((n) => list.insert(n))
list.reverse()
list.display()

