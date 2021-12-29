function longestCommonSubstr(str1, str2) {
    // O(mn * min(m,n)) time | O(mn * min(m,n)) space
    const grid = new Array(str2.length + 1)
        .fill()
        .map(() => new Array(str1.length + 1).fill([]))

    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2[i - 1] === str1[j - 1]) {
                grid[i][j] = grid[i - 1][j - 1].concat(str2[i - 1])
            } else {
                grid[i][j] = grid[i - 1][j].length > grid[i][j - 1].length ? grid[i - 1][j] : grid[i][j - 1]
            }
        }
    }
    console.log(grid[str2.length][str1.length]);
}

function lcsOptimal(str1, str2) {
    const grid = []
    for (let i = 0; i <= str2.length; i++) {
        const row = []
        for (let j = 0; j <= str1.length; j++) {
            const entry = new Array(4).fill(null)
            entry[1] = 0
            row.push(entry)
        }
        grid.push(row)
    }

    for (let i = 1; i <= str2.length; i++) {
        for (let j = 1; j <= str1.length; j++) {
            if (str2[i - 1] === str1[j - 1]) {
                grid[i][j] = [str2[i - 1], grid[i - 1][j - 1][1] + 1, i - 1, j - 1]
            } else {
                if (grid[i - 1][j][1] > grid[i][j - 1][1]) {
                    grid[i][j] = [null, grid[i - 1][j][1], i - 1, j]
                } else {
                    grid[i][j] = [null, grid[i][j - 1][1], i, j - 1]
                }
            }
        }
    }

    return backtrackAndBuildSeq(grid)

}

function backtrackAndBuildSeq(grid) {
    const seq = []
    let i = grid.length - 1
    let j = grid[0].length - 1
    while (i && j) {
        const current = grid[i][j]
        if (current[0]) {
            seq.unshift(current[0])
        }

        i = current[2]
        j = current[3]
    }
    return seq
}


lcsOptimal("xyscv", 'xyvd')