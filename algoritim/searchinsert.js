function searchInsert(numbers, target) {
    let right = numbers.length - 1;
    let left = 0;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (numbers[mid] == target) return mid;
        else if (numbers[mid] > target) right = mid - 1;
        else left = mid + 1;
    }
    return left;
};
console.log(searchInsert([2, 4, 5, 6], 4));