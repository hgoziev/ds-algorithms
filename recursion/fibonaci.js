function getFibonaci(n) {
    // O(2 ** n) time || O(n) space
    if (n === 2) {
        return 1
    } else if (n === 1) {
        return 0
    } else {
        return getFibonaci(n - 1) + getFibonaci(n - 2)
    }
}
function getFibo(n, saved = { 1: 0, 2: 1 }) {
    // O(n) time | O(n) space
    if (n in saved) return saved[n]
    else {
        saved[n] = getFibo(n - 1, saved) + getFibo(n - 2, saved)
        return saved[n]
    }
}

function getFiboIterive(n) {
    // O(n) time | O(1) space
    let counter = 3
    let lastTwoFibos = [0, 1]
    while (counter <= n) {
        const newFibonaci = lastTwoFibos[0] + lastTwoFibos[1]
        lastTwoFibos[0] = lastTwoFibos[1]
        lastTwoFibos[1] = newFibonaci
        counter++
    }
    return n > 1 ? lastTwoFibos[1] : lastTwoFibos[0]
}
console.log(getFibonaci(6));
console.log(getFibo(6));
console.log(getFiboIterive(6));
