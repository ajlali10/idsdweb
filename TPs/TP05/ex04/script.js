let x=Math.floor(Math.random()*100); // un nombre aleatoire entre 0 et 100
let a, n=1;
const max=6;
do{
    a=parseInt(prompt(n+"- Un nombre: "));
    if(!isNaN(a)){
        n++;
        if(a<x) alert("Ce nombre est petit.");
        else if(a>x) alert("ce nombre est grand");
        else alert("bingooo! "+" trouver en "+n+"etiration");
    }else alert("Votre saisie n'est pas un nombre");
}while((a!==x)&&(n<=max));
if(n===(max+1)) alert("Perdus!!!")
