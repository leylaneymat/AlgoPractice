function two(){
    let count = 0
    let number = prompt("Write a number")
    for (let i = number; i > 0; i--)
        if (i > 99 && i % 10 == 0) count++
    console.log(count)
}

two()