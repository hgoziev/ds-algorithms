function longestBalanced(string) {
    return Math.max(getBalancedCount(string, true), getBalancedCount(string, false))
}

function getBalancedCount(string, leftToRight) {
    let opening = leftToRight ? "(" : ")"
    let start = leftToRight ? 0 : string.length - 1
    let step = leftToRight ? 1 : -1

    let max = 0
    let openCount = 0
    let closeCount = 0
    let i = start
    while (i >= 0 && i < string.length) {
        if (string[i] === opening) {
            openCount++
        } else {
            closeCount++
        }

        if (openCount === closeCount) {
            max = Math.max(max, closeCount * 2)
        } else if (closeCount > openCount) {
            openCount = 0
            closeCount = 0
        }

        i += step
    }
    return max

}


const str = '((())(('
console.log(longestBalanced(str));