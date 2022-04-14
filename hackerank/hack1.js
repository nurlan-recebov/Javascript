// Array daxilində cütlərin sayını tapın 

let arr = [10, 20, 20, 10, 10, 30, 50, 10, 20];

arr.sort()
let even = []
for (let i = 0; i < arr.length; i++) {
    if (arr[i] == arr[i + 1]) {
        even.push(arr[i])
        arr[i + 1] = 0
    }
}
console.log(even.length);