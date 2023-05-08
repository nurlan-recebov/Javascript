Array.prototype.pushh = function(element) {
    return [...this, element]
}
console.log([1, 3, 5].pushh(30));