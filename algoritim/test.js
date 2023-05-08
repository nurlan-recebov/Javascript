String.prototype.divide = function() {
    return this.slice(0, Math.floor(this.length / 2)) + "+" + this.slice(Math.floor(this.length / 2))
}
console.log("salam".divide());