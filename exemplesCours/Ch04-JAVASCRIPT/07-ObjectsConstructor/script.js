function Etudiant(a,b){
    this.nom=a;
    this.prenom=b;
    this.notes=[];
    this.dirBonjour=function(){
        console.log("hi i am :"+this.nom)
    }
    this.ajouterNote=function(n){
        this.notes.push(n);
    }
    this.calculMoyenne=function(){
        var s=0;
        for(var i=0;i<this.notes.length;i++)
            s+=this.notes[i];
        return this.notes.length===0?0:s/this.notes.length;
    }
    
}
var e1=new Etudiant("barkouch","yassir");
var e2=new Etudiant("Elkinani","imane");
var e3=new Etudiant("berdouzi","nizar");
console.log("e1: "+e1.calculMoyenne());
console.log("e2: "+e2.calculMoyenne());
console.log("e3: "+e3.calculMoyenne());
e1.dirBonjour();
e2.dirBonjour();
e3.dirBonjour();
e1.ajouterNote(12);
e1.ajouterNote(14);
console.log(e1.notes);
e2.ajouterNote(12.3);
e2.ajouterNote(16);
console.log(e2.notes);
console.log("e1: "+e1.calculMoyenne());
console.log("e2: "+e2.calculMoyenne());
console.log("e3: "+e3.calculMoyenne());