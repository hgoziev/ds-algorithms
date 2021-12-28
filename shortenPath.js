function shortenPath(path) {
    const tokens = path.split('/').filter(char => char.length > 0 && char !== '.')
    const stack = []
    const startsWithSlash = path[0] === '/'
    if (startsWithSlash) stack.push('')
    for (let str of tokens) {
        if (str === "..") {
            if (stack[stack.length - 1] === '..' || stack.length === 0) {
                stack.push(str)
            } else if (stack[stack.length - 1] !== '') {
                stack.pop()
            }
        } else {
            stack.push(str)
        }
    }
    if (stack.length === 1 && stack[0] === '') return '/'
    return stack.join('/')
}

const path = "../../foo/../test/../test/../foo//bar/./baz"
console.log(shortenPath(path))