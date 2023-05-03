function pyramid() {
    let arr = 5
    let string = ''
    for (let i = 0; i < arr; i++) {
        for (let j = 0; j < arr - i; j++) {
            string += '*'
        }
        string += '\n'
        console.log(string);
    }
}
pyramid()