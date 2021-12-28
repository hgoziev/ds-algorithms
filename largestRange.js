function largestRange(array) {
    const nums = {}
    let largestRange = []
    let largest = 0

    for (let i in array) {
        nums[array[i]] = true
    }

    for (let i in array) {
        const current = array[i]
        if (!nums[current]) continue

        let left = current - 1
        let right = current + 1
        let currentLength = 1

        while (left in nums) {
            left--
            currentLength++
        }

        while (right in nums) {
            right++
            currentLength++
        }

        if (currentLength > largest) {
            largest = currentLength
            largestRange = [left + 1, right - 1]
        }
    }

    return largestRange
}

const array = [1, 11, 3, 0, 15, 5, 2, 4, 10, 7, 12, 6]
console.log(largestRange(array));
