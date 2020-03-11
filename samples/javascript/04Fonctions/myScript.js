console.log("avant les fonctions");
fonction1();
//fonction2();
console.log(x);
console.log("Apres ls fonctions");

function fonction1(param1, param2){
    console.log("Dans la fonction1");
}
//affectation d'une fonction a une variable
var fonction2=function(param1, param2){
    console.log("Dans la fonction2");
}
var x=20;

//ce code est equivalent a celui la
// var x;
// var fonction2;
// function fonction1(param1, param2){
//     console.log("Dans la fonction1");
// }

// console.log("avant les fonctions");
// fonction1();
// fonction2();
// console.log(x);
// console.log("Apres ls fonctions");

// fonction2=function(param1, param2){
//     console.log("Dans la fonction2");
// }

// x=20;
//////////////////////////////////////////////////////
//            Les fonctions avec return             //
//////////////////////////////////////////////////////
console.log("**********Fonction avec return**************");
function somme(a,b){
    c=a+b;
    return c;
}
var s=somme(4,5);
console.log(s);
s=somme(4);
console.log(s);
s=somme();
console.log(s);
console.log("*********Fonction avec valeurs par defaut********");
function somme1(a=0,b=0){
    c=a+b;
    return c;
}
var s=somme(4,5);
console.log(s);
s=somme1(4);
console.log(s);
s=somme1();
console.log(s);

//////////////////////////////////////////////////////
//            Les fonctions anonymes                //
//////////////////////////////////////////////////////
console.log("**********Fonction anonymes*****************");
(function(a,b){
    console.log("les parames sont: ",a," et ",b)
})();

