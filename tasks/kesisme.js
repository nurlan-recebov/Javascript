function kesisme(a, b) {
    let arr = []
    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < b.length; j++) {
            if (a[i] === b[j]) {
                arr.push(a[i])

            }
        }

    }
    return arr



}
console.log(kesisme([1, 2, 3, 4, 5], [2, 4, 5, 6]));