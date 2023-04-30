var arr = [1, 2, 3, 4, 5, 6]
var sorted = arr.sort(function(a, b) {
    return a - b

})

function binarySearch(arr, value) {
    let min = 0
    let max = arr.length - 1
    let mid = 0
    while (min <= max) {
        mid = Math.floor((min + max) / 2)
        if (arr[mid] === value) {
            return arr[mid]
        } else if (value > arr[mid]) {
            min = mid + 1
        } else {
            max = mid - 1
        }
    }
    return "tapilmadi"
}
console.log(binarySearch(sorted, 5));