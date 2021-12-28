function undirectedPath(edges, src, dest) {
    const graph = buildGraph(edges)
    const set = new Set()
    return hasPath(graph, src, dest, set)
}

function hasPath(graph, src, dest, visited) {
    if (src === dest) return true
    if (visited.has(src)) return
    visited.add(src)
    for (const neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dest, visited)) return true
    }
    return false
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
    ['i', 'j'],
    ['k', 'i'],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]


console.log(undirectedPath(edges, 'i', 'n'))