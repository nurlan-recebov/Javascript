function numbers() {
    var odd = []
    var even = []
    var array = [1, 4, 26, 4, 7, 9, 13]
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            odd.push(array[i])
        } else {
            even.push(array[i])
        }
    }

    odd.sort((a, b) => a - b);
    even.sort((a, b) => a - b);


    return odd.concat(even)

}
console.log(numbers());