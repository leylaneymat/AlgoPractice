let array = [1, 6, 2, 3, 1, 4, 5, 5, 3, 6, 5]

function nine(array){
    let result = new Set(array);
    // console.log(Array.from(result));
    return Array.from(result);
}

nine(array)