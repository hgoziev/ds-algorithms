function isCyclic(edges) {
    const visited = new Array(edges.length).fill(false)
    const inStack = new Array(edges.length).fill(false)

    for (let node = 0; node < edges.length; node++) {
        if (visited[node]) continue
        const cyclic = isNodeCyclic(node, edges, visited, inStack)
        if (cyclic) return true
    }
    return false
}

function isNodeCyclic(node, edges, visited, inStack) {
    visited[node] = true
    inStack[node] = true

    const neighbors = edges[node]
    for (const neighbor of neighbors) {
        if (!visited[neighbor]) {
            const cyclic = isNodeCyclic(neighbor, edges, visited, inStack)
            if (cyclic) return true
        } else if (inStack[node]) {
            return true
        }
    }

    inStack[node] = false
    return false
}