function smallestSubContaining(bigString, smallString) {
    let table = {}
    let bigTable = {}
    let foundChar = 0
    let smallest = bigString
    let right = 0
    let set = new Set()
    for (let char of smallString) {
        set.add(char)
        if (table[char]) {
            table[char]++
        } else {
            table[char] = 1
        }
    }

    for (let left in bigString) {
        while (right < bigString.length) {

            right++
            if (bigTable[bigString[right]]) {
                bigTable[bigString[right]]++
            } else {
                bigTable[bigString[right]] = 1
            }
            if (table[bigString[right]] && table[bigString[right]] === bigTable[bigString[right]]) {
                foundChar++
            }

            if (foundChar === set.size) {
                const current = bigString.slice(left, right)
                if (smallest.length > current.length) {
                    smallest = current
                    console.log('c', smallest);
                }

                delete bigTable[bigString[left]]
                break;
            }
        }
    }
    return smallest

}

const big = "abcd$ef$axb$c$"
const small = "$$abf"
smallestSubContaining(big, small)