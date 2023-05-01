function kesisme(string) {
    string.split('')
    let c = []
    let d = []

    for (let i = 0; i < string.length; i++) {

        for (let j = i + 1; j < string.length; j++) {
            if (string[i] === string[j]) {
                c.push(string[i])
            }
        }


    }
    return c


}
console.log(kesisme("nuurrlan"));