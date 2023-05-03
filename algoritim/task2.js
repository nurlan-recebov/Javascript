function generatePyramid(n) {


    let string = "";
    for (let i = 0; i <= n; i++) {

        for (let k = 0; k < i; k++) {
            string += "*";
        }
        string += "\n";
    }
    return string
}
console.log(generatePyramid(5));