function groupAnograms(words) {
    const anograms = {}

    for (let word of words) {
        const sortedWord = word.split('').sort().join('')
        if (sortedWord in anograms) {
            anograms[sortedWord].push(word)
        } else {
            anograms[sortedWord] = [word]
        }
    }

    return Object.values(anograms)
}

const words = ["yo", "act", "flop", "tac", "foo", "cat", "oy", "olfp"]

console.log(groupAnograms(words));