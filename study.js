'use strict';

var Person = {
    age: 20,
    name: "tarou",
    getAge: function() {
        return this.age;
    }
};

Person.getName = function() {
    return this.name;   // "tarou"
    return name;        // undefined
};

console.log(Person.getAge());
console.log(Person.getName());

/* Callback */
var doCallback = function(callback) {
    callback('done');
}
doCallback(function(result) {
    console.log('result: ' + result);
});

var doCallback2 = function(callback) {
    if (callback && typeof callback === 'function')callback('done2');
}
doCallback2(function(result) {
    console.log('result: ' + result);
});

/* Cache the length */
//NO
var foo = document.getElementById('p');
if (foo != null && foo.length < 1){
    for (var i=0; i<foo.length; i++){ 
        console.log(i);
    }
} else {
    console.log('null ppoi');
}

// YES
var foo2 = document.getElementById('p');
if (foo != null && foo.length < 1){
    for (var i=0, len=foo2.length; i< len; i++){
        console.log(i);
    }
} else {
    console.log('null ppoi');
}