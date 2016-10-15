'use strict';


// HTMLを正規表現してみる
// var dummy = '<!DOCTYPE html><html><head><title>titleValue</title></head><body><p>P_ELEMENT</p></body></html>';
var before_str = 'aaabbbcccdddeeefffaaa'
var regexp = new RegExp(/aaa/g);
console.log(before_str.replace(regexp, ''));
console.log(before_str.match(regexp, '').length);

document.getElementById('exec').addEventListener('click', function(){
    var regexp = document.form.reg.value;
    var text = document.form.text.value;
    document.getElementById('match_text').innerHTML = text.match(regexp) ? "true" : "false";
});

document.getElementById('check').addEventListener('click', function(){
    var re_str = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var re = new RegExp(re_str);
    if ( document.mail_address_check.address.value.match(re) ) {
        document.getElementById('match_text').innerHTML = "this is email address";
    } else {
        document.getElementById('match_text').innerHTML = "not email address";
    }
});
    // function regExp_test(){
    //     var text = 'Hello! world';
    //     var pattern = /l+/g;
    //     var match;
    //     while( match = pattern.exec(text) ) {
    //         console.log(match);
    //     }
    // }
    // function test2(){
    //     // var text ="abcefghabcabc";
    //     var text = "abcdefghrjklmnopqrstuvwxyz";
    //     var m = text.match(/abc/g);
    //     console.log(m);
    // }