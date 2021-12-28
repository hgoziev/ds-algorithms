function dfsPrint(graph, startNode) {
    const stack = [startNode]

    while (stack.length) {
        const current = stack.pop()
        console.log(current);
        for (let neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }

}

function dfsRecursive(graph, node) {
    console.log(node);
    for (let neighbor of graph[node]) {
        dfsRecursive(graph, neighbor)
    }
}
const graph = {
    a: ['b', 'c'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

dfsRecursive(graph, 'a')