{
    let x = 100; //data type niya is int or number
    let z = "20"; // data type niya is string 

    //e add ang duha ka variable
    let w = x + z;

    //output is 
    console.log("CONCAT:", w); //output kay 10020
}

let code = null;

//
let person = {
    //properties ang name, age, favFood tawag nila ARRAY object properties
    name: 'Mark',
    age: '300',
    favFood: 'LECHON',
    //dream, properties na naay function is tawag is ARRAY object method
    dream: function(){
        console.log("FULLSTACK JS DEVELOPER");
    }

}

//kuhaon ang realtimeDateTime
let now = new Date();
console.log(now);

//display ang object na naay function or object method
person.dream(); //mo show sya kay naka console.log

//displayt ang object na naay property na name
console.log("PROPS DRILLING", person.name);


//if object properties dili mo gamit ug ()
//else object method sya mo gamit ug () kay function