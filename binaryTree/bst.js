class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
        this.list = []
    }

    insert(value) {
        const node = new Node(value)
        if (this.root === null) {
            this.root = node
        } else {
            this.insertHelper(this.root, node)
        }

    }
    insertHelper(node, newNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode
            } else {
                this.insertHelper(node.left, newNode)
            }
        } else if (newNode.value > node.value) {
            if (!node.right) {
                node.right = newNode
            } else {
                this.insertHelper(node.right, newNode)
            }
        }
    }
    preOrder(node, list = []) {
        if (node) {
            list.push(node.value)
            this.preOrder(node.left, list)
            this.preOrder(node.right, list)
        }

        return list
    }
    inOrder(node, list = []) {
        if (node) {
            this.inOrder(node.left, list)
            list.push(node.value)
            this.inOrder(node.right, list)
        }
        return list
    }
    postOrder(node, list = []) {
        if (node) {
            this.postOrder(node.left, list)
            this.postOrder(node.right, list)
            list.push(node.value)
        }
        return list
    }
    remove(key) {
        this.root = this.removeHelper(this.root, key)
    }
    removeHelper(node, key) {
        if (!node) return null
        else if (key < node.value) {
            node.left = this.removeHelper(node.left, key)
            return node
        } else if (key > node.value) {
            node.right = this.removeHelper(node.right, key)
            return node
        } else {
            //delete node with no children 
            if (!node.left && !node.right) return null

            // delete node with one children 
            if (!node.left) return node.right
            if (!node.right) return node.left

            //delete node with two children 
            //find min node of right substree 
            const tempMinNode = this.findMinNode(node.right)
            node.value = tempMinNode.value
            node.right = this.removeHelper(node.right, tempMinNode.value)
            return node
        }

    }
    findMinNode(node) {
        while (node.left) {
            node = node.left
        }
        return node
    }
    findClosestValue(root, target) {
        return this.findClosestIterative(root, target)
    }
    findClosest(node, target, closest = node.value) {
        //Average O(log(n)) time || O(log(n)) space 
        // worst O(n) time  || O(n) space 
        if (!node) return closest
        if (Math.abs(target - closest) > Math.abs(target - node.value)) {
            closest = node.value
        }

        if (target < node.value) {
            return this.findClosest(node.left, target, closest)
        } else if (target > node.value) {
            return this.findClosest(node.right, target, closest)
        } else {
            return closest
        }

    }
    findClosestIterative(node, target, closest = node.value) {
        //Average O(log(n)) || O(1) space
        // worst O(n) || O(1) space 
        let currentNode = node
        while (currentNode) {
            if (Math.abs(target - closest) > Math.abs(target - currentNode.value)) {
                closest = currentNode.value
            }

            if (target < currentNode.value) {
                currentNode = currentNode.left
            } else if (target > currentNode.value) {
                currentNode = currentNode.right
            } else {
                break
            }
        }
        return closest
    }
    isValid(root) {
        if (!root) return []
        let stack = [root]
        while (stack.length) {
            const node = stack.pop()
            if (node.left && node.left.value >= node.value) return false
            if (node.right && node.right.value <= node.value) return false

            if (node.left) stack.push(node.left)
            if (node.right) stack.push(node.right)
        }
        return true
    }
}
function makeMinHeightBST(array) {
    return makeMinHieghtBSTRecursive(array)
}
function makeMinHieghtBSTRecursive(array, startIdx, endIdx) {
    const middleIdx = Math.floor((startIdx + endIdx) / 2)
    const newBST = new Node(array[middleIdx])
    newBST.left = makeMinHieghtBSTRecursive(array, start, middleIdx - 1)
    newBST.right = makeMinHieghtBSTRecursive(array, middleIdx + 1, end)
    return newBST
}

function KthLargestValue(k) {
    //O(n) time | O(n) space
    const values = tree.inOrder(tree.root)
    return values[values.length - k]
}
function KthLargestValueOptimal(k) {
    //O(h + k) time | O(h) space
    const lastVisitedObj = new treeInfo(0, null)
    reverseInorderTraverse(this.root, k, lastVisitedObj)
    return lastVisitedObj.latestNodeValue
}
function reverseInorderTraverse(node, k, lastVisitedObj) {
    if (!node || lastVisitedObj.numOfNodesVisited <= k) return

    reverseInorderTraverse(node.right, k, lastVisitedObj)
    if (lastVisitedObj.numOfNodesVisited < k) {
        lastVisitedObj.numOfNodesVisited++
        lastVisitedObj.latestNodeValue = node.value
        reverseInorderTraverse(node.left, k, lastVisitedObj)
    }
}
function treeInfo(numOfNodesVisited, latestNodeValue) {
    this.numOfNodesVisited = numOfNodesVisited
    this.latestNodeValue = latestNodeValue
}
function sameBst(arrayOne, arrayTwo) {
    if (arrayOne.length !== arrayTwo.length) return false
    if (arrayOne[0] !== arrayTwo[0]) return false
    if (arrayOne.length === 0 && arrayTwo.length === 0) return true

    const leftOne = getSmaller(arrayOne)
    const leftTwo = getSmaller(arrayTwo)
    const rightOne = getBiggerOrEqual(arrayOne)
    const rightTwo = getBiggerOrEqual(arrayTwo)

    return sameBst(leftOne, leftTwo) && sameBst(rightOne, rightTwo)
}
function getSmaller(array) {
    const smaller = []
    for (let i = 1; i < array.length; i++) {
        if (array[i] < array[0]) smaller.push(array[i])
    }
    return smaller
}
function getBiggerOrEqual(array) {
    const biggerOrEqual = []
    for (let i = 1; i < array.length; i++) {
        if (array[i] >= array[0]) biggerOrEqual.push(array[i])
    }
    return biggerOrEqual
}
const tree = new BinarySearchTree()
const arr = [7, 28, 4, 8, 32, 1, 9]
arr.forEach(n => tree.insert(n))
// const list = tree.inOrder(tree.root)
// const isVal = tree.isValid(tree.root)
// console.log(isVal);
const kth = KthLargestValue(2)
console.log(kth);