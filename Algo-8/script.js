let array = [1, 2, 3, 4, 5, 6]

function eight(array){
    let sum = 0
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] == 2 || array[i] == 1 || array[i] == 0) continue
        for (let j = array[i] - 1; j > 1; j--)
            if (array[i] % j == 0) {
                sum += array[i]
                break
        }
    }
    console.log(sum)
}

eight(array)