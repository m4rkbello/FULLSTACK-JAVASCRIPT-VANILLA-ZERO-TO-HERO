//3 main comparison operator AND, OR, NOT

var age = prompt("ENTER YOUR AGE?");
var data = prompt("ENTER YOUR NAME?");
// if (age >= 18 || age < 60){
//     console.log("YOUR ALLOWED TO WATCH SPAKOL!");
// }else if(age > 10 || age <= 17){
//     console.log("PARENTAL GUIDANCE");
// }else{
//     console.log("YOUR A TODDLER");
// };

//gamit AND UG NOT
if(age === 24 && !(data ==="BELLO")){
    console.log("YOUR IN!");
}else{
    console.log("YOUR OUT!");
}

//NESTED IF STATEMENT 
var data1 = prompt("Your Firstname");
var data2 = prompt("Your Lastname");

if(data1 ==="mark"){
    if(data2 ==="bello"){
        console.log("Welcome", data1, data2, "MABUHAY!");
    }
}else{
    console.log("ERROR!");
}