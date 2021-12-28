function sunset(buildings, direction) {
    let stack = []
    const step = direction === 'EAST' ? -1 : 1
    let start = direction === 'EAST' ? buildings.length - 1 : 0
    while (start >= 0 && start < buildings.length) {
        if (stack.length > 0 && buildings[start] >= buildings[stack[stack.length - 1]]) {
            stack.pop()
        }
        stack.push(start)
        start += step
    }
    return stack.sort()
}


const buildings = [3, 5, 4, 4, 3, 1, 3, 2]
const direction = 'WEST'

console.log(sunset(buildings, direction));