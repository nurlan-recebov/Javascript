function Animal(name) {
    this.name = name;
}

Animal.prototype.eat = function() {
    console.log(this.name + ' is eating.');
};
const cat = new Animal('Kitty');
cat.eat();