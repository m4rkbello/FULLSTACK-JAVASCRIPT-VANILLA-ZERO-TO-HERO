// function data(x, y){
//     let total = 1;
//     for(let i = 0; i < y; i++){
//         total *=x;

//     }
//     return total;
// }

// console.log(data());
// console.log(data(4, 2, 4, 5, 6, 7));



//E RETURN NIYA ANG PINAKADAKO NA NUMBER
function ohaha(w, ...extra){
    let data = w;
    for(y = 0; y < extra.length; y++){
        if(extra[y] > data){
            data = extra[y];
        }
    }
    return data;
}

console.log(ohaha(30, 345, 3245, 5767, 789, 7689));


