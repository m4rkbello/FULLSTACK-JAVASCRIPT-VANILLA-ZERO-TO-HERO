
//function  decleration//

function tao(data1, data2){
    let errors = 1;
    for(let i = 0; i<data2; i++){
        errors *= data1;
    }

    return errors;

}

function courses(data3, data4){
    let errors = 1;
    for(let i = 0; i<data4; i++){
        errors *= data3;
    }

    return errors;

}
//function decleration//



//function expression //
let data = function collections(parameter1, parameter2){
    let items = 1;

    for(let i = 0; i< parameter2; i++){
        items *= parameter1;
    }
    return items;
}

console.log(data(5,5));
//function expression //


//ADD FUNCTION SA ARRAY//
function elements(param1, param2){
    let items = 1;

    for(let i = 0; i< param2; i++){
        items *= param1;
    }
    return items;
}

let parsingFunction = [elements];
console.log(parsingFunction[0](3,3));
///////////////////////////////////////////////////////////////////////////



//function to an ARRAY OBJECT AS PROPERTY - REFERENCING SA FUNCTION DECLARATION!
let numbers = {
    data: tao
};

console.log(numbers.data(5, 5));

//////////////////////////////////////////////////////////////////


//ADD PROPERTY SA FUNCTION//
tao.listahan = "HASTANG WERDOHA ANG JAVASCRIPT!";

console.log(tao.listahan);

/////////////////////////////////////////////////////////////////////////


//FUNCTION TO PARAMETER === IS CALLBACK FUNCTION//
function callbackExample(callback){
    return callback(4,4);
}

console.log(callbackExample(courses));

/////////////////////////////////////////////////////////////////////////



//CALLBACK RETURN A FUNCTION//
//function decleration niya na gipasa sa callback
function cars(brand1, brand2){
    //initializer
    let result = 1;

    for(let mark = 0; mark < brand2; mark++){
        result *= brand1;
    }
    return result;
}

//callback function 
function returnAFunction(){
    return cars;
}

console.log(returnAFunction()(10,3));
//CALLBACK RETURN A FUNCTION//










function collection(x, y){
    let total = 1;
    for(let i = 0; i < y; i++){
        total *=x;

    }
    return total;
}

console.log(collection(4, 2, 4, 5, 7));


