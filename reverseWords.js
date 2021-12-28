function reverseWords(string) {


    let words = []
    let start = 0
    let res = ''
    for (let i in string) {
        if (string[i].charCodeAt() === 32) {
            words.push(string.slice(start, i))
            start = i
        } else if (string[start].charCodeAt() === 32) {
            words.push(' ')
            start = i
        }
    }

    words.push(string.slice(start))

    let left = 0
    let right = words.length - 1
    while (left < right) {
        let temp = words[left]
        words[left] = words[right]
        words[right] = temp

        left++
        right--
    }

    return words.join("")
}



const str = 'great   another12 65 !'
console.log("!".charCodeAt());
console.log(reverseWords(str));