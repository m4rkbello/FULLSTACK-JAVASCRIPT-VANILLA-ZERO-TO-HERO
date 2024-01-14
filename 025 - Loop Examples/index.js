
//DO WHILE - IUC 
// let password; //INITIALIZER
// do{
//     password = prompt("ENTER A PASSWORD!"); //UPDATE
// }while(password !== "markbello"); //CONDITION: if ang password niya is mali mo balik sya sa DO
// console.log("WELCOME!", password);


// //FOR LOOP - ICU 
// for(let data = 5; data < 50; data = data + 5){
//     console.log("FOR LOOP", data);
// }

//FOR LOOP ARRAY GAMIT LENGTH
// let item = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for(let i = 0; i < item.length; i++){
//     console.log("FOR LOOP ARRAY", item[i]);
// }


//FOR LOOP WITH FILTERING INDEX ASSUMING NA NAAY COLLECTION FROM REDUX
let bill_category = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 29, 32, 31, 30, 33];

let findId1 = 29; //bc_id SCHOOL ID
let findId2 = 30; //bc_id TEST PAPER FEE
let findId3 = 31; //bc_id UTILITY SERVICE FEE
let findId4 = 32; //bc_id RESEARCH FEE
let findId5 = 33; //bc_id FACILITIES IMPORMENT
let totalMescellaneous = 0; //add tanang mescellaneous 

for(let i = 0; i < bill_category.length; i++){
    if(bill_category[i] === findId1 || bill_category[i] === findId2 || bill_category[i] === findId3 || bill_category[i] === findId4 || bill_category[i] === findId5){
        console.log(bill_category[i]);
        totalMescellaneous += bill_category[i];
        console.log("TOTAL MESCELLANEOUS ACCOUNT", totalMescellaneous, "is found at index", +i);
    }
}

