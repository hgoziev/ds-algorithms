function isInterwoven(one, two, three) {
    if (one.length + two.length !== three.length) return false
    return isWoven(one, two, three, 0, 0)
}

function isWoven(one, two, three, i, j) {
    let k = i + j

    if (i < one.length && one[i] === three[k]) {
        if (isWoven(one, two, three, i + 1, j)) return true
    }

    if (j < two.length && two[j] === three[j]) {
        if (isWoven(one, two, three, i, j + 1)) return true
    }

    return false
}

const one = 'go'
const two = 'ano'
const three = 'goano'
console.log(isInterwoven(one, two, three));