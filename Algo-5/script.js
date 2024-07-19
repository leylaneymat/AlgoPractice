function five(array){
    let number = 0
    for (let i = array.length - 1; i >= 0; i--)
        if (number < array[i]) number = array[i]
    console.log(number)
}

five(array)