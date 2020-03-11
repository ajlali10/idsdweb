function Etudiant(n,p){
    this.nom=n;
    this.prenom=p;
}
e1=new Etudiant("rachidi","ayoub");
e2=new Etudiant("yahyaoui", "ahmed");
console.log(e1.__proto__);
//e1.dirHi();
Etudiant.prototype.dirHi=function(){
    console.log("Hi!!!");
}
console.log(Etudiant.prototype)
console.log(e1.__proto__)
console.log(e2.__proto__)
e1.dirHi()