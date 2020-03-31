function Membre(name="gounane", id=0, grade="C"){
    this.name=name;
    this.id=id;
    this.grade=grade;
    this.toString=function(){
        let str= `Nom: ${this.name}, id: ${this.id}, garde: ${this.grade}`
        return str;
    }
}
function Team(name){
    this.name=name;
    this.members=new Array();
    this.addMember=function(m){
        this.members.push(m);
    }
    this.toString=function(){
        let str=new String(this.name+":\n");
        for(let i=0;i<this.members.length;i++)
            str=str.concat("\t"+this.members[i]+"\n");
        return str;
    }
}
let m1=new Membre("bardouzi","Imane","B");
let m2=new Membre("gounane","adnane","B");
let m3=new Membre("bahadi","rachida","A");
let m4=new Membre("elmoumni","anas","A");
let m5=new Membre("Ait elhaj","hanane","B");
let team1=new Team("EST");
let team2=new Team("FST");
team1.addMember(m1);
team1.addMember(m2);
team1.addMember(m3);
team2.addMember(m4);
team2.addMember(m5);

console.log(team1.toString());
console.log(team2.toString());

let m6=new Membre("elbouanani");
console.log(m6.toString())