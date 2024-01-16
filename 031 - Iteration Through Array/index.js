//basic examples
// let items  = [13, 120, 300, 400, 2, 4, 5, 77, 66, 555, 546, 88, 987, 44, 33, 22, 77, 668, 198, 484, 111];

// for(let i = 0; i < items.length; i++){
//     console.log(items[i]);
// }


//LOOPING ARRAY WITH ITEMS 
let items  = [13, 120, 300, 400, 2, 4, 5, 77, 66, 555, 546, 88, 987, 44, 33, 22, 77, 668, 198, 484, 111];

items.length = 21;
items[25] = 30;

for(let i = 0; i < items.length; i++){
    if(items[i] !== undefined){
        console.log(items[i]);
    }
  
}


//filtering sample or searching an specific id 
let datas  = [13, 120, 300, 400, 2, 4, 5, 77, 66, 43, 555, 546, 88, 987, 44, 33, 22, 77, 668, 198, 484, 111];

datas.length = 21;
datas[25] = 30;

let found = false;
let search = 43;

for(let i = 0; i < datas.length; i++){
    if(datas[i] === search){
        found == true;
        console.log(datas[i]);
    }

    if(found){
        console.log("DATA HAS BEEN FOUND!");
    }
}