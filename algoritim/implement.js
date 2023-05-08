function Person(name, age) {
    this.name = name
    this.age = age
}
Person.prototype.introduce = function() {
    return "Hi, my name is " + this.name + " and I'm " + this.age + " years old.";
}
var Nurlan = new Person('Nurlan', 25)
console.log(Nurlan.introduce());