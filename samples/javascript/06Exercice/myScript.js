function Etudiant(nom,prenom, age){
  this.nom=nom;
  this.prenom=prenom;
  this.age=age;
  this.notes=[];
  this.ajouternote=function(note){
    this.notes.push(note);
  }

  this.calculMoyenne=function(){
    var moy=0;

    return moy;
  }
}
var e1=new Etudiant("Ait Idir","Idir",19);
var e2=new Etudiant("Bahra","Reda",18);
console.log("e1: ",e1);
console.log("e2: ",e2);
e1.ajouternote(16);
e1.ajouternote(15);
console.log("e1: ",e1);
console.log("e2: ",e2);
var me1=e1.calculMoyenne();
var me2=e2.calculMoyenne();
console.log("moy e1: ",me1);
console.log("moy e2: ",me2);