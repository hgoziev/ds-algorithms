
function shortestPath(edges, src, dest) {
    const graph = buildGraph(edges)
    const queue = [[src, 0]]
    const visited = new Set([src])
    while (queue.length) {
        let [current, distance] = queue.shift()
        if (current === dest) return distance
        for (let neighbor of graph[current]) {
            if (!visited.has(neighbor)) {
                queue.push([neighbor, distance + 1])
                visited.add(neighbor)
            }
        }
    }
    return -1
}

function buildGraph(edges) {
    const graph = {}

    for (const edge of edges) {
        const [a, b] = edge
        if (!(a in graph)) graph[a] = []
        if (!(b in graph)) graph[b] = []
        graph[a].push(b)
        graph[b].push(a)
    }

    return graph
}
const edges = [
    ["w", "x"],
    ["x", "y"],
    ["z", "v"],
    ["z", 'y'],
    ['w', 'v']
]
console.log(shortestPath(edges, 'w', 'z'))