# 正規表現するやつ
自分向けメモ  

### "text".match("探す文字列")するとmatchした部分が返ってくる  

### "text".match(/[0-9]+/g)すると、そのtextが数字であるか調べられる

### 例
str = "12:34:56";  
if( str.match(/^[0-9][0-9]:[0-9][0-9]:[0-9][0-9]$/) ){ /マッチした時の処理/ }  
  
"text".match("regStr") // regStrを含んでいるかどうか  
var re = new RegExp("abcdef", "i");  
"text".match(re);  
でも同じ？