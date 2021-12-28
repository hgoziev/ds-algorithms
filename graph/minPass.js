function minPassOfMatrix(matrix) {
    const passes = convertNegatives(matrix)
    return !containsNegative(matrix) ? passes - 1 : -1
}

function convertNegatives(matrix) {
    const queue = getAllPositivePositions(matrix)
    let passes = 0
    while (queue.length > 0) {
        let size = queue.length
        while (size > 0) {
            const [row, col] = queue.shift()
            const adjacentPositions = getAdjacent(row, col, matrix)
            for (const neighborPos of adjacentPositions) {
                const [row, col] = neighborPos
                if (matrix[row][col] < 0) {
                    matrix[row][col] *= -1
                    queue.push([row, col])
                }
            }
            size--
        }
        passes += 1
    }
    return passes

}
function getAdjacent(row, col, matrix) {
    const adjacent = []
    if (row > 1) adjacent.push([row - 1, col])
    if (row < matrix.length - 1) adjacent.push([row + 1, col])
    if (col > 0) adjacent.push([row, col - 1])
    if (col < matrix[row].length - 1) adjacent.push([row, col + 1])

    return adjacent
}

function getAllPositivePositions(matrix) {
    const positions = []
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if (matrix[row][col] > 0) positions.push([row, col])
        }
    }
    return positions
}