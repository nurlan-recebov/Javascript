function Increasing(numbers) {
    let count = 0;
    for (let i = 1; count <= 1 && i < numbers.length; i++) {
        if (numbers[i] <= numbers[i - 1]) {
            count++;
            if (i > 1 && numbers[i] <= numbers[i - 2]) numbers[i] = numbers[i - 1];
        }
    }
    return count <= 1;
};
console.log(Increasing([2, 3, 18, 5, 9]));