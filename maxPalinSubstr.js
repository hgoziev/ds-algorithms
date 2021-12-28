function maxPalinSubstr(string) {
    let maxPalin = ''
    for (let i in string) {
        for (let j = i; j < string.length; j++) {
            const substring = string.slice(i, j + 1)
            if (isPalin(substring) && maxPalin.length < substring.length) {
                maxPalin = substring
            }
        }
    }
    return maxPalin
}

function isPalin(string) {
    let left = 0
    let right = string.length - 1
    while (left < right) {
        if (string[left] !== string[right]) return false
        left++
        right--
    }
    return true
}


function maxPalinSubStrOptimal(string) {
    let max = [0, 1]
    for (let i = 1; i < string.length; i++) {
        const odd = getPalin(string, i - 1, i + 1)
        const even = getPalin(string, i - 1, i)
        const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even
        max = max[1] - max[0] > longest[1] - longest[0] ? max : longest

    }

    return string.slice(max[0], max[1])
}

function getPalin(string, left, right) {
    while (left >= 0 && right < string.length) {
        if (string[left] !== string[right]) break;
        left--
        right++
    }

    return [left + 1, right]
}
const string = "abaxyzzyxf"

console.log(maxPalinSubStrOptimal(s0tring));