//NESTED FOR LOOP

// for(let data=0; data< 10; data++){
//     for(let item=data; item<10; item++){
//         console.log(data, item);
//     }
// }



let d = document.getElementById("nestedForLoop");

for(let i = 0; i < 10; i++){
    for(let k = i; k >= 0; k--){
        d.append(k);
    }
    var br = document.createElement('br');
    d.appendChild(br);
}



