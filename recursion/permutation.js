function getPermutation(array) {
    const permutations = []
    permutationMaker(array, [], permutations)
    return permutations
}

function permutationMaker(array, currentPermutation, permutations) {
    if (!array.length && currentPermutation.length) {
        permutations.push(currentPermutation)
    } else {
        for (let i = 0; i < array.length; i++) {
            const newArr = array.slice(0, i).concat(array.slice(i + 1))
            const newPermutation = currentPermutation.concat([array[i]])
            permutationMaker(newArr, newPermutation, permutations)
        }
    }
}


function permuteIterative(array) {
    let results = []
    if (array.length === 0) return []
    if (array.length === 1) return [array[0]]
    for (let i = 0; i < array.length; i++) {

        const currentNum = array[i]
        const remainingNums = array.slice(0, i).concat(array.slice(i + 1))
        const remainingNumsPerm = permuteIterative(remainingNums)

        for (let j = 0; j < remainingNumsPerm.length; j++) {
            let permutedArr = [currentNum].concat(remainingNumsPerm[j])
            results.push(permutedArr)
        }
    }

    return results
}
const per = [1, 2, 3]
const pers = permuteIterative(per)
