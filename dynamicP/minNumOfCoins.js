function minNumOfCoins(target, denoms) {
    const numOfCoins = new Array(target + 1).fill(Infinity)
    numOfCoins[0] = 0

    for (const denom of denoms) {
        for (let amount = 0; amount < numOfCoins.length; amount++) {
            if (denom <= amount) {
                numOfCoins[amount] = Math.min(numOfCoins[amount], 1 + numOfCoins[amount - denom])
            } else {
                break
            }
        }

    }
    console.log(numOfCoins);
    return numOfCoins[target]
}


const d = [1, 5, 10]
const n = 7
minNumOfCoins(n, d)