function bfs(graph, startingNode) {
    const queue = [startingNode]

    while (queue.length) {
        const current = queue.shift()
        console.log(current);
        for (const neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
}


const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

bfs(graph, 'a')