const maps = {
    1: ["1"],
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z'],
    0: ["0"]
}
function phone(number) {
    let results = []
    let currMnemonics = new Array(number.length).fill('0')
    getPhoneLetters(0, number, currMnemonics, results)
    return results
}

function getPhoneLetters(idx, number, currMnemonics, results) {
    if (idx === number.length) {
        const joinedLetters = currMnemonics.join('')
        results.push(joinedLetters)
    } else {
        let digit = number[idx]
        let chars = maps[digit]

        for (let char of chars) {
            currMnemonics[idx] = char
            getPhoneLetters(idx + 1, number, currMnemonics, results)
        }
    }
}
const n = '1905'
console.log(phone(n));