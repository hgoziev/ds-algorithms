function removeIsland(grid) {

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            if (!isBorder(row, col, grid)) continue
            if (matrix[row][col] !== 1) continue

            // here it is 1 and in the border
            changeOnesToTwo(row, col, grid)
        }
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid[0].length; col++) {
            const value = grid[row][col]
            if (value === 1) grid[row][col] = 0
            else if (value === 2) grid[row][col] = 1
        }
    }
    console.log(grid);
    return grid
}
function changeOnesToTwo(row, col, grid) {
    const stack = [[row, col]]
    while (stack.length) {
        const [row, col] = stack.pop()
        grid[row][col] = 2
        const neighbors = getNeighbors(row, col, grid)
        for (const neighbor of neighbors) {
            const [row, col] = neighbor
            if (matrix[row][col] !== 1) continue
            stack.push(neighbor)
        }
    }
}


function getNeighbors(row, col, grid) {
    const neighbors = []
    if (row - 1 >= 0) neighbors.push([row - 1, col])
    if (row + 1 < grid.length) neighbors.push([row + 1, col])
    if (col - 1 >= 0) neighbors.push([row, col - 1])
    if (col + 1 < grid[0].length) neighbors.push([row, col + 1])
    return neighbors
}
function isVisited(row, col, nodesAtBorder) {
    return nodesAtBorder[row][col]
}
function isBorder(row, col, grid) {
    const isRowBorder = row === 0 || row === grid.length - 1
    const isColBorder = col === 0 || col === grid[0].length - 1
    return isRowBorder || isColBorder
}

const matrix = [
    [1, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1],
    [0, 0, 1, 0, 1, 0],
    [1, 1, 0, 0, 1, 0],
    [1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 1],
]

removeIsland(matrix)