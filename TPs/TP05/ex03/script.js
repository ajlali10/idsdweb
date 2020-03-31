function somme(T){
    let s=0;
    for(i in T) s+=T[i];
    return s;
}

let T=new Array();
let a=prompt("Donnez un nombre: ");;
while(!isNaN(a)){
    T.push(parseInt(a));
    a=prompt("Donnez un nombre: ");
}
console.log(T);
let som=somme(T);
console.log("la somme est : ",som)