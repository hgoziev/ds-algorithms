
function hasPath(graph, src, dest) {
    //depth first 
    if (src === dest) return true
    for (const neighbor of graph[src]) {
        if (hasPath(graph, neighbor, dest)) return true
    }
    return false
}

function hasPathBfs(graph, src, dest) {
    const queue = [src]
    while (queue.length) {
        const current = queue.shift()
        if (current === dest) return true
        for (const neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
    return false
}

const graph = {
    f: ['g', 'i'],
    g: ['h'],
    h: [],
    i: ['g', 'k'],
    j: ['i'],
    k: []
}

console.log(hasPathBfs(graph, 'f', 'k'))