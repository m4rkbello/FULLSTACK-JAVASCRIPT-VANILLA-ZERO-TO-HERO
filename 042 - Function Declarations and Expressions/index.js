//FUNCTION DECLERATION

function personalData(parameter1, parameter2){
    //initializer
    let data = 1;
   
    for(let i = 0; i < parameter2; i++){
        data *= parameter1;
    }
    return data;
}

console.log("FUNCTION WITH ARGUMENT AND PARAMENTERS", personalData(4,5));



//FUNCTION EXPRESSION
let functPerson = function(parameter1, parameter2){
    //initializer
    let data = 1;
   
    for(let i = 0; i < parameter2; i++){
        data *= parameter1;
    }
    return data;
}

console.log("DECLAIRE A FUNCTION TO A VARIABLE", functPerson(2,2));





