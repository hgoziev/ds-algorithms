class Node {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}
class BinaryTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        const node = new Node(value)
        if (this.root === null) {
            this.root = node
        } else {
            this.insertHelper(this.root, node)
        }
    }
    insertHelper(currentNode, newNode) {
        if (currentNode.value > newNode) {
            if (currentNode.left === null) {
                currentNode.left = newNode
            } else {
                this.insertHelper(currentNode.left, newNode)
            }
        } else {
            if (currentNode.right === null) {
                currentNode.right = newNode
            } else {
                this.insertHelper(currentNode.right, newNode)
            }
        }
    }
    show(type = 'in') {
        if (type === 'in') this.inOrder(this.root)
        if (type === 'pre') this.preOrder(this.root)
        if (type === 'post') this.postOrder(this.root)
    }
    traverse(type = 'depth', root, value) {
        if (type == 'depth') this.depthFirst(root, value)
        if (type === 'depthRec') this.depthFirstRecursive(root, value)
        if (type === 'breadth') this.breadthFirst(root, value)
    }
    inOrder(node) {
        if (node) {
            this.inOrder(node.left)
            console.log(node.value);
            this.inOrder(node.right)
        }
    }
    preOrder(node) {
        if (node) {
            console.log(node.value);
            this.inOrder(node.left)
            this.inOrder(node.right)
        }
    }
    postOrder(node) {
        if (node) {
            this.inOrder(node.left)
            this.inOrder(node.right)
            console.log(node.value);
        }
    }
    depthFirst(node, value) {
        //iterative
        if (node === null) return []
        const stack = [node]
        const results = []
        while (stack.length > 0) {
            const currentVisited = stack.pop()
            results.push(currentVisited.value);
            if (currentVisited.right) stack.push(currentVisited.right)
            if (currentVisited.left) stack.push(currentVisited.left)
        }
        console.log(results);
    }
    depthFirstRecursive(node, value) {
        if (node === null) return []
        const leftValues = this.depthFirstRecursive(node.left)
        const rightValues = this.depthFirstRecursive(node.right)
        const results = [node.value, ...leftValues, ...rightValues]
        console.log(results);
        return results
    }
    breadthFirst(root, value) {
        if (root === null) return []
        const queue = [root]
        const result = []
        while (queue.length > 0) {
            const currentVisited = queue.pop()
            // if (currentVisited.value === value) { console.log('true'); return true }
            result.push(currentVisited.value)
            if (currentVisited.left) queue.unshift(currentVisited.left)
            if (currentVisited.right) queue.unshift(currentVisited.right)
        }
        // console.log('false');
        return false
        // console.log(result);
        // return result

    }
    has(root, value) {
        if (root === null) return false
        const queue = [root]

        while (queue.length > 0) {
            const current = queue.pop()
            if (current.value === value) return true
            if (current.left) queue.unshift(current.left)
            if (current.right) queue.unshift(current.right)
        }
        return false
    }

    hasDepth(root, value) {
        if (root === null) return false
        if (root.value === value) return true
        return this.hasDepth(root.left, value) || this.hasDepth(root.right, value)
    }
    getSum(root) {
        if (root === null) return 0
        // return root.value + this.getSum(root.left,) + this.getSum(root.right)
        let sum = 0
        let stack = [root]
        while (stack.length > 0) {
            const current = stack.pop()
            sum += current.value
            if (current.left) stack.push(current.left)
            if (current.right) stack.push(current.right)
        }
        return sum
    }
    getMin(root) {
        if (root === null) return null

        let smallest = Infinity
        let stack = [root]
        while (stack.length > 0) {
            const current = stack.pop()
            smallest = Math.min(current.value, smallest)
            if (current.right) stack.push(current.right)
            if (current.left) stack.push(current.left)
        }

        return smallest

    }
    getMinRecursive(root) {
        if (root === null) return Infinity
        return Math.min(root.value, this.getMin(root.left), this.getMin(root.right))
    }
    getMaxSumPath(root) {
        const { max } = Math
        if (root === null) return -Infinity
        if (!root.left && !root.right) return root.value
        const maxChild = max(this.getMaxSumPath(root.left), this.getMaxSumPath(root.right))
        return maxChild + root.value
    }
    getBranchSumFromRootToLeaf(root) {
        let sum = []
        this.sumBranches(root, 0, sum)
        console.log(sum);
        return sum
    }
    sumBranches(root, localSum, result) {
        if (root === null) return 0
        localSum += root.value
        if (!root.left && !root.right) {
            result.push(localSum)
            return
        }
        this.sumBranches(root.left, localSum, result)
        this.sumBranches(root.right, localSum, result)
    }
    getSumOfDepths(root) {
        if (!root) return 0
        let sum = 0
        let stack = [{ node: root, depth: 0 }]

        while (stack.length > 0) {
            let { node, depth } = stack.pop()
            if (!node) continue
            sum += depth
            stack.push({ node: node.left, depth: depth + 1 })
            stack.push({ node: node.right, depth: depth + 1 })
        }
        console.log(sum);
        return sum

    }
    getDiameter(root) {
        let diameter = 0
        function calcHeight(root) {
            if (!root) return 0

            let leftHeight = calcHeight(root.left)
            let rightHeight = calcHeight(root.right)

            diameter = Math.max(diameter, leftHeight + rightHeight)
            return 1 + Math.max(leftHeight, rightHeight)
        }
        calcHeight(root)
        return diameter
    }
    binaryTreeDiameter(tree) {
        let res = -Infinity
        function dfs(root) {
            if (!root) return -1
            let left = dfs(root.left)
            let right = dfs(root.right)
            res = Math.max(res, 2 + left + right)
            return 1 + Math.max(left, right)
        }
        dfs(tree)
        return res
    }
}

function getD(root) {
    let diameter = 0
    const { max } = Math
    function process(root) {
        if (!root) return 0

        let leftHeight = process(root.left)
        let rightHeight = process(root.right)
        diameter = max(diameter, leftHeight + rightHeight)
        return 1 + max(leftHeight, rightHeight)
    }

    process(root)

    function calcDiameter(root) {
        if (!root) return -1
        const leftHeight = calcDiameter(root.left)
        const rightHeight = calcDiameter(root.right)
        diameter = max(diameter, leftHeight + rightHeight + 2)
        return 1 + max(leftHeight, rightHeight)
    }
    calcDiameter(root)
    return diameter
}
function findSucessor(root, node) {
    const values = traverseInOrder(root)
    for (let i = 0; i < values.length; i++) {
        if (values[i] !== node) continue
        if (i === values.length - 1) return null
        return values[i + 1]
    }
    return null

}

function traverseInOrder(node, values = []) {
    if (!node) return values
    traverseInOrder(node.left, values)
    values.push(node)
    traverseInOrder(node.right, values)
    return values

}

function NodeWithParent(value) {
    this.value = value
    this.left = null
    this.right = null
    this.parent = null
}
function findSuccWithParent(root, node) {
    if (node.right) return getLeftMost(node.right)
    return getRightMost(node)
}
function getLeftMost(node) {
    let current = node
    while (current.left) {
        current = current.left
    }
    return current
}
function getRightMost(node) {
    let current = node
    while (current.parent && current.parent.right === current) {
        current = current.parent
    }
    return current.parent
}
function isBalanced(root) {
    return !!checkHeight(root)
}
function checkHeight(root) {
    if (!root) return true
    const left = checkHeight(root.left)
    const right = checkHeight(root.right)
    if (!left || !right || Math.abs(left - right) > 1) return false
    else return Math.max(left, right) + 1
}
function maxPathSum(root) {
    const [_, max] = findMaxSum(root)
    return max
}

function findMaxSum(tree) {
    if (!tree) return [0, -Infinity]
    const { max } = Math
    const { value } = tree

    const [leftMaxSumAsBranch, leftMaxPathSum] = findMaxSum(tree.left)
    const [rightMaxSumAsBranch, rightMaxPathSum] = findMaxSum(tree.right)

    //max sum on either right or left side 
    const maxChildAsBranch = max(leftMaxSumAsBranch, rightMaxSumAsBranch)

    //max sum including the root of the triangle with one side 
    const maxSumAsBranch = max(maxChildAsBranch + value, value)

    //as triangle sum  with all side and root node
    const maxSumAsRootNode = max(leftMaxSumAsBranch + value + rightMaxSumAsBranch, maxSumAsBranch)

    //maxSum which we return at the end 
    const runningMaxPathSum = max(leftMaxPathSum, rightMaxPathSum, maxSumAsRootNode)

    return [maxSumAsBranch, runningMaxPathSum]
}


function maxPath(root) {
    const [_, maxPath] = findMaxPathSum(root)
    return maxPath
}

function findMaxPathSum(root) {
    if (!root) return [0, -Infinity]
    const { max } = Math
    const { value } = root
    const [leftSumBranch, leftSumAsTriangle] = findMaxPathSum(root.left)
    const [rightSumBranch, rightSumAsTriangle] = findMaxPathSum(root.right)

    const maxChildBranch = max(leftSumBranch, rightSumBranch)
    const maxSumBranchWithRoot = max(maxChildBranch + value, value)
    const maxSumAsTriangle = max(leftSumBranch + value + rightSumBranch, maxSumBranchWithRoot)
    const maxSum = max(maxSumAsTriangle, leftSumAsTriangle, rightSumAsTriangle)

    return [maxSumBranchWithRoot, maxSum]

}

function findNodesKDistance(root, target, k) {
    const parents = {}
    placeParentOfNodes(root, parents, null)
    const targetNode = getNodeFromValue(target, root, parents)
    const result = getValuesOfNodesFromDistanceK(targetNode, parents, k)
    console.log(result);
    return result
}
function getValuesOfNodesFromDistanceK(targetNode, parents, k) {
    const queue = [{ currentNode: targetNode, distance: 0 }]
    const seenSet = new Set([targetNode.value])

    while (queue.length) {
        const { currentNode, distance } = queue.shift()

        if (distance === k) {
            const nodeValues = queue.map(({ currentNode }) => currentNode.value)
            nodeValues.push(currentNode.value)
            return nodeValues
        }

        const connectedNodes = [currentNode.left, currentNode.right, parents[currentNode.value]]

        for (const node of connectedNodes) {
            if (!node) continue
            if (seenSet.has(node.value)) continue

            seenSet.add(node.value)
            queue.push({ currentNode: node, distance: distance + 1 })
        }
    }
    return []
}
function getNodeFromValue(value, node, parents) {
    if (node.value === value) return node
    const nodeParent = parents[value]
    if (nodeParent.left && node.left.value === value) {
        return nodeParent.left
    }

    return nodeParent.right
}
function placeParentOfNodes(node, parents, parent) {
    if (node) {
        parents[node.value] = parent
        placeParentOfNodes(node.left, parents, node)
        placeParentOfNodes(node.right, parents, node)
    }
}

function findKDistanceNodes2(root, target, k) {
    const result = []
    findDistance(root, target, k, result)
    console.log(result);
    return result
}
function findDistance(node, target, k, result) {
    if (!node) return -1
    if (node.value === target) {
        addSubtreeNode(node, distance = 0, k, result)
        return 1
    }

    let leftDistance = findDistance(node.left, target, k, result)
    let rightDistance = findDistance(node.right, target, k, result)

    if (leftDistance === k || rightDistance === k) result.push(node.value)

    if (leftDistance !== -1) {
        addSubtreeNode(node.right, leftDistance + 1, k, result)
        return leftDistance + 1
    }
    if (rightDistance !== -1) {
        addSubtreeNode(node.left, rightDistance + 1, k, result)
        return rightDistance + 1
    }
    return -1
}
function addSubtreeNode(node, distance, k, result) {
    if (!node) return
    if (distance === k) result.push(node.value)
    else {
        addSubtreeNode(node.left, distance + 1, k, result)
        addSubtreeNode(node.right, distance + 1, k, result)
    }
}
function inOrderIterativeWithParentPointer(root) {
    let prev = null
    let next = null
    let current = root
    const arr = []
    while (current) {
        if (!prev || prev === current.parent) {
            if (current.left) {
                next = current.left
                console.log(current.value);
            } else {
                console.log(current.value);
                next = current.right || current.parent
            }
        } else if (prev === current.left) {
            console.log(current.value);
            next = current.right || current.parent
        } else {
            console.log(current.value);
            next = current.parent
        }
        prev = current
        current = next
    }

    console.log(arr);
}
function flattenTree(root) {
    //O(n) time | O(n) space 
    function getNodeValues(root, arr = []) {
        if (root) {
            getNodeValues(root.left, arr)
            arr.push(root)
            getNodeValues(root.right, arr)
        }
        return arr
    }
    const arr = getNodeValues(root)
    for (let i = 0; i < arr.length - 1; i++) {
        let left = arr[i]
        let right = arr[i + 1]

        left.right = right
        right.left = left
    }


    console.log(arr[0]);
    return arr[0]
}
function flattenRecursive(root) {
    // example output [4,2, 5,1, 8, 9]

    const [leftMost] = flattenHelper(root)
    return leftMost
}
function flattenHelper(node) {
    let leftMost, rightMost

    if (!node.left) {
        leftMost = node
    } else {
        const [leftMostOfLeftSubstree, rightMostOfLeftSubstree] = flattenHelper(node.left)
        // example output [4,2, 5,1, 8, 9]
        //here right most of left substree is 5 (the left) of the node (1 if it is root)
        connect(rightMostOfLeftSubstree, node)
        leftMost = leftMostOfLeftSubstree
    }

    if (!node.right) {
        rightMost = node
    } else {
        const [leftMostOfRightSubstree, rightMostOfRightSubstree] = flattenHelper(node.right)
        // example output [4,2, 5,1, 8, 9]
        //here node(1 if it is root) is the left of the 8 (left most) of right substree
        connect(node, leftMostOfRightSubstree)
        rightMost = rightMostOfRightSubstree
    }


    return [leftMost, rightMost]
}
function connect(left, right) {
    left.right = right
    right.left = left
}
function makeRightSubling(root) {
    mutateRightSibling(root, null, false)
    return root
}

function mutateRightSibling(node, parent, isLeft) {
    if (!node) return null;

    let left = node.left
    let right = node.right
    mutateRightSibling(left, node, true)
    if (!parent) {
        node.right = null
    } else if (isLeft) {
        node.right = parent.right
    } else {
        if (!parent.right) {
            node.right = null
        } else {
            node.right = parent.right.left
        }
    }
    mutateRightSibling(right, node, false)
}

function allKindsOfDepths(root) {
    if (!root) return
    const stack = [root]
    let sumOfAll = 0

    while (stack.length) {
        const currentNode = stack.pop()
        sumOfAll += nodeDepths(currentNode)
        stack.push(currentNode.left)
        stack.push(currentNode.right)
    }
    return sumOfAll
}
function nodeDepths(node, depth = 0) {
    if (!node) return 0
    return depth + nodeDepths(node.left, depth + 1) + nodeDepths(node.right, depth + 1)
}
function allKindsOfDepthsRecur(root) {
    return getTreeInfo(root).sumOfAll
}
function getTreeInfo(root) {
    if (!root) return new TreeInfo(0, 0, 0)

    const left = getTreeInfo(node.left)
    const right = getTreeInfo(node.right)
    const numOfNodes = 1 + left.numOfNodes + right.numOfNodes
    const sumOfDepthsLeft = left.sumOfDepths + left.numOfNodes
    const sumOfDepthsRight = right.sumOfDepths + right.numOfNodes
    const sumOfDepths = sumOfDepthsLeft + sumOfDepthsRight
    const sumOfAll = sumOfDepths + left.sumOfAll + right.sumOfAll
    return new TreeInfo(numOfNodes, sumOfDepths, sumOfAll)
}
function TreeInfo(numOfNodes, sumOfDepths, sumOfAll) {
    this.numOfNodes = numOfNodes
    this.sumOfDepths = sumOfDepths
    this.sumOfAll = sumOfAll
}
const root = new NodeWithParent(1)
const b = new NodeWithParent(2)
const c = new NodeWithParent(3)
const f = new NodeWithParent(7)
const d = new NodeWithParent(4)
const e = new NodeWithParent(5)
const g = new NodeWithParent(6)
const k = new NodeWithParent(8)
const l = new NodeWithParent(9)

root.parent = null
root.left = b
b.parent = root
b.left = d
d.parent = b
b.right = e
e.parent = root
root.right = c
c.right = f
c.left = g


const tree = new BinaryTree()
// const arr = [10, 9, 6, 7, 11, 15]
// tree.traverse('breadth', root, 'e')
// console.log(tree.getMinRecursive(root));
// console.log(tree.getMaxSumPath(root))
// tree.getBranchSum(root)
// console.log(tree.getSumOfDepths(root));
// console.log(tree.getDepthSumRec(root))
// console.log(tree.getDiameter(root));
// console.log(tree.binaryTreeDiameter(root));
// getD(root)
// console.log(findSuccWithParent(root, g))
// console.log(isBalanced(root));
// findKDistanceNodes2(root, 2, 1)
// inOrderIterativeWithParentPointer(root)
// flattenTree(root)
// const node = mutateRightSibling(root)
// showNodesInOrder(node)