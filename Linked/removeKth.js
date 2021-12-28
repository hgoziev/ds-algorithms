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
            return node
        }

    }
    display() {
        let current = this.head
        let values = []
        while (current !== null) {
            values.push(current.value);
            current = current.next
        }
        console.log(values);
    }
    removeKth(idx) {
        let slow = this.head
        let fast = this.head

        while (idx >= 0 && fast) {
            fast = fast.next
            idx--
        }

        while (fast) {
            fast = fast.next
            slow = slow.next
        }
        if (fast === null) {
            this.head.value = this.head.next.value
            this.head.next = this.head.next
            return
        }
        slow.next = slow.next.next
    }
    sumOfTwoLists(list1, list2) {
        let l1 = list1
        let l2 = list2
        let newList = new LinkedList()
        let carr = 0
        while (l1 && l2) {
            const localSum = l1.value + l2.value
            const localValue = carr + localSum
            const remainder = localValue % 10
            if (localValue <= 9) {
                newList.insert(localValue)
                carr = 0
            } else {
                newList.insert(remainder)
                carr++
            }
            l1 = l1.next
            l2 = l2.next
        }

    }
    find(val) {
        let current = this.head
        let table = new Set()
        while (current) {
            if (table.has(current)) {
                console.log(current);
                return current
            } else {
                table.add(current)
            }
            current = current.next
        }
        return null
    }

}

const list = new LinkedList()
const arr = [1, 2, 3, 4,]
arr.forEach((n) => list.insert(n))
list.find(3)
list.display()