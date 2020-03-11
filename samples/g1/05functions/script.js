var msg1="first message";

showMessage();

function showMessage(){
    var msg2="seconde message";
    msg3="3th mesage";
    console.log("====IN function====");
    console.log(msg1);
    console.log(msg2);
    console.log(msg3);
}

console.log("====OUT function====");
console.log(msg1);
console.log(msg2);
console.log(msg3);