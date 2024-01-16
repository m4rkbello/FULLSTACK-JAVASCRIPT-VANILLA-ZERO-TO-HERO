//calculate the values of ARRAY GAMIT FOR LOOP!
//initializer
let utang = [1000, 100, 345, 5678, 77, 23, 124];

//variables argument
let count = 0;
let total = 0;


for(let bunal = 0; bunal < utang.length; bunal++){
    if(utang[bunal] != 0){
        count++
        total +=utang[bunal];
    }
}

let average = count / total;
console.log("YOUR UTANG AVERAGE IS", average);