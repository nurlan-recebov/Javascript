// linearsearch
arr = [1, 2, 3, 4]

function linearSearch(arr, target) {
    for (let i in arr) {
        if (arr[i] === target) return i

    }
    return -1

}

console.log(linearSearch(arr, 3))