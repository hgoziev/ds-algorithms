function longestSubstringWithoutDuplication(string) {
    let temp = []
    let val = ''
    for (let i = 0; i < string.length; i++) {
        if (!temp.includes(string[i])) {
            temp.push(string[i])
        } else {
            console.log(val);
            console.log(temp);
            if (val.length < temp.length) {
                val = temp.join('')
            }
            temp = [string[i - 1], string[i]]
        }
    }

    return val
}

function lwd(string) {
    const table = {}
    let start = 0
    let longest = [0, 1]
    for (let i = 0; i < string.length; i++) {
        if (string[i] in table) {
            start = Math.max(start, table[string[i]] + 1)
        }

        if (longest[1] - longest[0] < i + 1 - start) {
            longest = [start, i + 1]
        }

        table[string[i]] = i
    }
    return string.slice(longest[0], longest[1])
}
const s = 'clementisacap'
// console.log(lwd(s))


const aa = 'adsdfsds'
const ss = 'aaaaaaaaaa'
let i = 0
while (i < ss.length) {
    if (!aa.includes(ss[i])) {
        console.log(false);
    }
    i++
}
// console.log(longestSubstringWithoutDuplication(s))