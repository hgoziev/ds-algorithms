function numOfWaysToMakeChange(target, denoms) {
    //O(nd) time | O(n) space
    const ways = new Array(target + 1).fill(0)
    ways[0] = 1

    for (const denom of denoms) {
        for (let amount = 1; amount < target + 1; amount++) {
            if (denom <= amount) {
                ways[amount] += ways[amount - denom]
            }
        }
    }

    return ways[target]
}

const denom = [1, 5, 10, 25]
const target = 10
console.log(numOfWaysToMakeChange(target, denom));
