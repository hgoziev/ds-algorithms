function knapsack(items, capacity) {
    //O(n *  capacity) time | O(n * capaticy) space

    const grid = []
    for (let i = 0; i <= items.length; i++) {
        const row = new Array(capacity + 1).fill(0)
        grid.push(row)
    }

    for (let i = 1; i <= items.length; i++) {
        const currentWeight = items[i - 1][1]
        const currentValue = items[i - 1][0]
        for (let j = 0; j <= capacity; j++) {
            if (currentWeight > j) {
                grid[i][j] = grid[i - 1][j]
            } else {
                const currMaxValue = grid[i - 1][j - currentWeight] + currentValue
                grid[i][j] = Math.max(currMaxValue, grid[i - 1][j])
            }
        }
    }
    const res = backtrackItems(grid, items)
    console.log([grid[items.length][capacity], res]);
}
function backtrackItems(grid, items) {
    const sequence = []
    let row = grid.length - 1
    let column = grid[0].length - 1
    while (row > 0) {
        if (grid[row][column] === grid[row - 1][column]) {
            row--
        } else {
            sequence.unshift(row - 1)
            column -= items[row - 1][1]
            row--
        }
        if (column === 0) break
    }
    return sequence
}

const items = [[1, 2], [4, 3], [5, 6], [6, 7]]
const capacity = 10
knapsack(items, capacity)