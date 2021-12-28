
//O(n) time | O(n) space
function stair4(height, maxSteps) {
    let waysToTop = [1]
    let currentNumOfWays = 0


    for (let currHeight = 1; currHeight <= height; currHeight++) {
        const start = currHeight - maxSteps - 1
        const end = currHeight - 1
        if (start >= 0) currentNumOfWays -= waysToTop[start]
        currentNumOfWays += waysToTop[end]
        waysToTop.push(currentNumOfWays)
    }

    return waysToTop[height]
}


function stair1(height, maxSteps) {
    //O(k ** n) time  | O(n) space
    return stairRecursive(height, maxSteps)
}

function stairRecursive(height, maxSteps) {
    if (height <= 1) return 1

    let numberOfWays = 0
    for (let step = 1; step <= Math.min(maxSteps, height); step++) {
        numberOfWays += stairRecursive(height - step, maxSteps)
    }
    return numberOfWays
}
function stair2(height, maxSteps) {
    //O(k *  n) time | O(n) space
    const cache = { 0: 1, 1: 1 }
    return stairCache(height, maxSteps, cache)
}
function stairCache(height, maxSteps, cache) {
    if (height in cache) return cache[height]

    let numberOfWays = 0
    for (let step = 1; step < Math.min(maxSteps, height) + 1; step++) {
        numberOfWays += stairCache(height - step, maxSteps, cache)
    }

    cache[height] = numberOfWays
    return numberOfWays
}

function stair3(height, maxSteps) {
    let waysToTop = new Array(height + 1).fill(0)
    waysToTop[0] = 1
    waysToTop[1] = 1

    for (let currentHeight = 2; currentHeight <= height; currentHeight++) {
        let step = 1
        while (step <= maxSteps && step <= currentHeight) {
            waysToTop[currentHeight] = waysToTop[currentHeight] + waysToTop[currentHeight - step]
            step++
        }
    }
    return waysToTop[height]

}
console.log(stair4(4, 2));