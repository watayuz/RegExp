'use strict';
// var reg = new RegExp("");

// // 0-9の１回以上の繰り返し
// var pattern = /[0-9]+/g;
// // 上と同じ意味？？
// var pattern_constructor = new RegExp('[0-9]+', 'g');


var text = 'Hello! world';
var pattern = /l+/g;

var match;
while( match = pattern.exec(text) ) {
    print("match");
}