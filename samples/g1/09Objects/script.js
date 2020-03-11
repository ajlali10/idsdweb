var etudiant={
    nom:"yahyaoui",
    prenom:"yassir",
    notes: [10,14,12]
}
console.log(etudiant);
console.log(etudiant.nom);   
etudiant.age=24;
console.log(etudiant);
etudiant.nom="Gounane"
console.log(etudiant);  
console.log(etudiant["nom"]);
var a="prenom";
console.log(etudiant[a]);
var e=etudiant;
console.log(e)
e.nom="berkouch"
console.log(e)
console.log(etudiant)