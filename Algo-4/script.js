let array = [1, 2, 3]

function four(array){
    let sum = 0
    for (let i = array.length - 1; i >= 0; i--)
        sum += array[i]
    console.log(sum)
}

four(array)