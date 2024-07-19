function three(){
    let sum = 0
    let number = prompt("Write a number")
    for (let i = number; i > 0; i--)
        if (i > 99 && i % 7 == 0 && i % 8 == 0) sum += i
    console.log(sum)
}

three()