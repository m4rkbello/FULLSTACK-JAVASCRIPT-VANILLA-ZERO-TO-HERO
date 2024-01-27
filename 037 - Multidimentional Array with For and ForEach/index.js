//initializers
//FOR LOOP APPLY!
let collections = [
    [123, 345, 6778,3,6,8,9,0,22,34665],
    [234, 45, 56, 6786, 88, 99, 90, 45],
    [34, 56, 88, 99, 34, 756, 867, 876],
    [45, 55, 767, 787, 987, 77, 88, 90],
    [566, 777, 888, 999, 99945, 88,34,]
];

//nested For Loop!
for(i = 0; i < collections.length; i++){
    for(j= 0; j < collections[1].length; j++){
        console.log("FOR LOOP MULTIPLE ARRAY DATA", collections[i][j]);
    }
}


//nested foreach by row
collections.forEach(function(una){
    console.log("COLLECTION UNA", una);
})


//nested foreach 2 ka loop sa multi-array
collections.forEach(function(una){
    una.forEach(function(duha){
        console.log("NESTED COLUMN", duha);
    })
    console.log("------------")
})

