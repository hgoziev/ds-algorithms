function MergedIntervals(array){
    const sorted =  array.sort((a, b)=>a[0]-b[0])
    let current = sorted[0]
    const mergedIntervals =[current]

    for(let i=0; i<sorted.length;i++){
        const [currentStart, currentEnd]= current
        const [nextStart, nextEnd]= sorted[i]

        if(currentEnd >= nextStart){
            current[1] = Math.max(currentEnd, nextEnd)
        }else {
            current = sorted[i]
            mergedIntervals.push(current)
        }
    }
    
    return mergedIntervals
}

const arr = [[1,2], [3,5], [4, 7], [6, 8], [9, 10]]
console.log(MergedIntervals(arr));