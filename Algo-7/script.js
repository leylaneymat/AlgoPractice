let vowels = "aioueAIOUE"

function seven(string){
    let count = 0
    for (let i = string.length - 1; i >= 0; i--)
        for (let j = vowels.length - 1; j >= 0; j--)
            if (string[i] == vowels[j]) count++
    console.log(count)
}

seven(string)