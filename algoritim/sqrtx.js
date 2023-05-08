function mySqrt(x) {
    if (x < 0) {
        return;
    }

    let i = 0;
    while (true) {
        if (i * i <= x && (i + 1) * (i + 1) > x) {
            return i;
        }
        i++;
    }
}
console.log(mySqrt(4));