// Objet leteral
const e={
  nom: "Yaakoubi",
  prenom: "Ilyas"
};
console.log(e);
e.nom="Ahmadi";
console.log(e);
console.log(e.nom);
console.log(e.prenom);
console.log(e.age );
e.age=25; 

console.log(e);
console.log(e.nom);
console.log(e.prenom);
console.log(e.age );
// Attention aucune erreur dans ce qui suit
e.name="Gounane"
console.log(e);
//Erreur e est une constante
//e={nom:"rachidi"};
////////////////////////////////////////////////////////////
//             References d'objet                       //
///////////////////////////////////////////////////////////
var e1={
  nom:"Morchidi",
  prenom: "Rihabe"
}
var e2=e1;
e2.nom="igourram";
console.log("e1: ",e1);
console.log("e2: ",e2);
e1.age=24;
console.log("e1: ",e1);
console.log("e2: ",e2);
////////////////////////////////////////////////////////////
//             Constructeur d'objet                       //
///////////////////////////////////////////////////////////
console.log("-----------------------------------------------")
console.log("------    Constructeur d'objet  ---------------")
console.log("-----------------------------------------------")
function Etudiant(a,b,c){
  this.nom=a;
  this.prenom=b;
  this.age=c;
  this.notes=[];
  this.direBonjour=function(){
    console.log("bonjour : ",this.nom)
  }
}
var e1=new Etudiant();
e1.direBonjour();
console.log("e1: ", e1);
e1.nom="Ait elhaje";
e1.prenom="ibrahim";
e1.age=21;
console.log("e1: ", e1);
e1.direBonjour();
var e2=new Etudiant("Elgamani","Bouchra",20);
console.log("e2: ", e2);
e2.direBonjour();