function one(){
    let sum = 0
    let number = prompt("Write a number")
    for (let i = number; i > 0; i--) 
        if (i > 9 && i % 2 == 1) sum += i
    console.log(sum)
}

one()