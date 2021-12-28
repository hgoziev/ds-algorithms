function zigzag(array) {
    let row = 0;
    let col = 0;
    let height = array.length - 1
    let width = array[0].length - 1
    let result = []
    let goingDown = true

    while (!(isOutOfBorder(row, col, height, width))) {
        result.push(array[row][col])


        if (goingDown) {
            if (col === 0 || row === height) {
                goingDown = false
                if (row === height) {
                    col++
                } else {
                    row++
                }
            } else {
                row++;
                col--
            }
        } else {
            if (row === 0 || col === width) {
                goingDown = true
                if (col === width) {
                    row++
                } else {
                    col++
                }

            } else {
                col++
                row--
            }
        }

    }
    return result

}


function isOutOfBorder(row, col, height, width) {
    return row < 0 || row > height || col < 0 || col > width
}

const arr = [
    [2, 5, 9, 11],
    [6, 8, 12, 15],
    [7, 13, 14, 16],
    [10, 2, 24, 78]
]

console.log(zigzag(arr));
