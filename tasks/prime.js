// sade ededi tapmaq
function sadeeded(number) {
    for (let i = 2; i < number; i++) {

        if (number % i == 0) {
            return false
        }

    }
    return true
}
console.log(sadeeded(20));