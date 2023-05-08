function add(number) {
    let total = 0;

    return function() {
        total += number;
        return total;
    };


}
const addfive = add(5)
console.log(addfive());