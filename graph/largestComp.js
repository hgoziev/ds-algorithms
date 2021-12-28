function largestComp(graph) {
    let largest = -Infinity
    let visited = new Set()
    for (let node in graph) {
        const size = explore(graph, node, visited)
        if (size > largest) largest = size
    }
    console.log(largest);
    return largest
}

function explore(graph, current, visited) {
    if (visited.has(current)) return 0
    visited.add(current)
    let size = 1
    for (let neighbor of graph[current]) {
        size += explore(graph, neighbor, visited)
    }
    return size
}



const graph = {
    0: ["8", "1", "5"],
    1: ["0"],
    5: ["0", "8"],
    8: ["0", "5"],
    2: ["3", "4"],
    3: ["2", "4"],
    4: ["3", "2"]
}

largestComp(graph)