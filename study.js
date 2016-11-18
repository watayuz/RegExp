'use strict';

var Person = {
    age: 20,
    name: "tarou",
    getAge: function() {
        return this.age;
    }
};

Person.getName = function() {
    return this.name;
};

console.log(Person.getAge());
console.log(Person.getName());