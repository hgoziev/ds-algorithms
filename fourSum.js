function fourSum(array, targetSum ){
    const allPairs = {}
    const quadruplest = []

    for (let i=1; i< array.length-1; i++){
        for(let j=i+1; j<array.length; j++){
            const current =  array[i] +  array[j]
            const difference = targetSum - current 
            if(difference in allPairs){
                for (const pair of allPairs[difference]){
                    quadruplest.push(pair.concat([array[i], array[j]]))
                }
            }
        }

        for (let k=0; k< i ; k++){
            const current =  array[i] +  array[k]
            if(!(current in allPairs)){
              allPairs[current] =  [[array[i], array[k]]]
            }else {
               allPairs[current].push([array[i], array[k]])
            }
        }
    }

    return quadruplest 
}

const array =[7,6,4,-1, 1, 2]
const targetSum = 16 

console.log(fourSum(array, targetSum));