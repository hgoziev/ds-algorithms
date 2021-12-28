function nextGreator(array) {
    let result = new Array(array.length).fill(-1)
    let stack = []

    for (let i = 0; i < 2 * array.length; i++) {
        const cIdx = i % array.length
        while (stack.length > 0 && array[stack[stack.length - 1]] < array[cIdx]) {
            const top = stack.pop()
            result[top] = array[cIdx]
        }
        stack.push(cIdx)
    }
    return result
}

function nextGreator2(array) {
    let result = new Array(array.length).fill(-1)
    let stack = []

    for (let i = 2 * array.length - 1; i > -1; i--) {
        const cIdx = i % array.length
        while (stack.length > 0) {
            if (stack[stack.length - 1] <= array[cIdx]) {
                stack.pop()
            } else {
                result[cIdx] = stack[stack.length - 1]
                break;
            }
        }
        stack.push(array[cIdx])

    }
    return result

}
const arr = [2, 5, -3, -4, 6, 7, 2]
console.log(nextGreator2(arr));