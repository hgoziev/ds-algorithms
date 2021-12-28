function gridTraveler(n, m) {
    //O(2 ** n+m) time | O(n+m) space
    if (n === 1 && m === 1) return 1
    if (n === 0 || m === 0) return 0
    return gridTraveler(n - 1, m) + gridTraveler(n, m - 1)
}


function gridTravelerMemoized(n, m, memo = {}) {
    //O(n*m) time | O(n + m) space 
    const key = `${n}, ${m}`
    if (key in memo) return memo[key]
    if (n === 1 && m === 1) return 1
    if (n === 0 || m === 0) return 0
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n - 1, memo)
    return memo[key]
}
function gridTravelerWithFactorial(n, m) {
    const rowsBelow = n - 1
    const colRight = m - 1
    const top = factorial(rowsBelow + colRight)
    const bottom = factorial(rowsBelow) * factorial(colRight)
    return Math.floor(top / bottom)
}

function factorial(num) {
    let result = 1
    for (let n = 2; n <= num; n++) {
        result *= n
    }
    return result
}
function gridTravelerTabulation(m, n) {
    const table = new Array(m + 1)
        .fill()
        .map(() => new Array(n + 1).fill(0))
    table[1][1] = 1

    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const current = table[i][j]
            if (j + 1 <= n) table[i][j + 1] += current
            if (i + 1 <= m) table[i + 1][j] += current
        }
    }
    console.log(table[m][n]);

}

gridTravelerTabulation(3, 3)
// console.log(gridTravelerTabulation(1, 1));
// console.log(gridTravelerTabulation(2, 3));
// console.log(gridTravelerTabulation(3, 2));
// console.log(gridTravelerTabulation(3, 3))
// console.log(gridTravelerTabulation(18, 18))