function waterfall(array, source) {
    let rowAbove = array[0].slice()
    rowAbove[source] = -1

    for (let i = 1; i < array.length; i++) {
        let currentRow = array[i].slice()
        for (let j in rowAbove) {
            let valueAbove = rowAbove[j]
            let hasWater = valueAbove < 0
            let isBlock = currentRow[j] === 1

            if (!hasWater) continue;
            if (!isBlock) {
                currentRow[j] += valueAbove
                continue;
            }

            const splitWater = valueAbove / 2
            let right = j
            while (right < rowAbove.length) {
                right++
                if (rowAbove[right] === 1) break;
                if (currentRow[right] !== 1) {
                    currentRow[right] += splitWater
                    break
                }
            }
            let left = j
            while (left >= 0) {
                left--
                if (rowAbove[left] === 1) break

                if (currentRow[left] !== 1) {
                    currentRow[left] += splitWater
                    break;
                }
            }


        }
        rowAbove = currentRow
    }
    return rowAbove.map((val) => val * -100)
}

const arr = [
    [0, 0, 0, 0, 0, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 1, 0],
    [0, 0, 0, 0, 0, 0, 1],
    [0, 0, 0, 0, 0, 0, 0],
]
const source = 3

console.log(waterfall(arr, source));

