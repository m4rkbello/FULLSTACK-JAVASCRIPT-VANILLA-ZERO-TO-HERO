//initializer
let items = [300, 23, 45646,  435645, 22, 1, 2, 34, 5, 67, 87, 856, 3454, 657, 76, 23, 567, 768, 232, 765, 243231, 77, 234, 5467,65, 456, 456, 7,  6];
//old method using for loop functionb
items.length = 30;
for(let i = 0; i < items.length; i++){
    if(items[i] !== undefined){
        console.log("FOR LOOP METHOD",items[i]);
    }
}



//forEach method na naay callback function
let collection = [300, 23, 45646,  435645, 22, 1, 2, 34, 5, 67, 87, 856, 3454, 657, 76, 23, 567, 768, 232, 765, 243231, 77, 234, 5467,65, 456, 456, 7,  6];

collection.forEach(function(data, i, array){
    console.log("FOREACH LOOP WITH CALLBACK FUNCTION", (data, i, array));
});