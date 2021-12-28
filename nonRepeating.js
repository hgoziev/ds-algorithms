function nonRepeating(string) {
    const table = {}
    for (let i = 0; i < string.length; i++) {
        if (!table[string[i]]) { table[string[i]] = [i, 1] }
        else { table[string[i]][1] += 1 }
    }

    for (let value of Object.values(table)) {
        if (value[1] === 1) return value[0]
    }
    return -1

}

const str = 'faadabcbbebdf"'
console.log(nonRepeating(str));