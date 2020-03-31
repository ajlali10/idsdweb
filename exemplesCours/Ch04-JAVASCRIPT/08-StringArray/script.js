var str="salut tous le monde";
console.log(str);
console.log(str.length)
console.log(str.charAt("4"));
var STR=str.toUpperCase();
console.log(STR);
var tab=str.split(' ')
console.log(tab)
tab.push("!!!")
var a=tab.shift();
tab.unshift("Bonjour")
console.log(a)
console.log(tab)
console.log(tab.length)
str=tab.join(" ")
console.log(str)