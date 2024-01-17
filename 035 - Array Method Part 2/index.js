//sorted
let data = [23, 34545, 56, 67, 67, 676, 5656, 6745, 56, 77, 3343, 564, 456];

let collection = data.sort();

for(i = 0; i < collection.length; i++){
    console.log("data", data[i]);
}





//CALLBACK FUNCTION 
// let members = [124, 3456, 456, 664, 578, 5678];
// console.log("MEMBERS", members.sort())

let members = [124, 3456, 456, 664, 578, 5678];

for (let i = 0; i < members.length - 1; i++) {
    for (let j = 0; j < members.length - i - 1; j++) {
        if (members[j] > members[j + 1]) {
            // Swap elements if they are in the wrong order
            let temp = members[j];
            members[j] = members[j + 1];
            members[j + 1] = temp;
            console.log("Sorted MEMBERS:", members);
        }
    }
}


