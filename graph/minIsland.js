function minIsland(grid) {
    let smallest = Infinity
    const visited = new Set()
    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            const size = explore(grid, row, col, visited)
            if (smallest > size && size > 0) {
                smallest = size
            }
        }
    }
    console.log(smallest);
    return smallest
}

function explore(grid, row, col, visited) {
    const rowInbounds = 0 <= row && row < grid.length
    const colInbounds = 0 <= col && col < grid[0].length
    if (!rowInbounds || !colInbounds) return 0
    if (grid[row][col] === 'w') return 0
    const position = `${row}, ${col}`
    if (visited.has(position)) return 0
    visited.add(position)
    let size = 1

    size += explore(grid, row - 1, col, visited)
    size += explore(grid, row + 1, col, visited)
    size += explore(grid, row, col - 1, visited)
    size += explore(grid, row, col + 1, visited)

    return size
}
const grid = [
    ['w', 'l', 'w', 'w', 'w'],
    ['w', 'l', 'w', 'w', 'w'],
    ['w', 'w', 'w', 'l', 'w'],
    ['w', 'w', 'l', 'l', 'w'],
    ['l', 'w', 'w', 'l', 'l'],
    ['l', 'l', 'w', 'w', 'w']
]

minIsland(grid)