//initializer
// let data = [];

//while loop
// while(true){
//     let input = prompt("Ad a number");
//     data.push(Number(input));
//     console.log(data);
// }




//example na naay break ang while loop
//initializer
let collections = [];

while (true) {
    let input = prompt("Add a number");

    // Check if the user clicked "Cancel" or provided an empty input
    if (input === null || input.trim() === "") {
        console.log("Invalid input. Exiting the loop.");
        break;
    }

    // Check if the user entered "w" to break the loop
    if (input.toLowerCase() === "w") {
        break;
    }

    // Convert the input to a number and push it to the collections array
    collections.push(Number(input));

    // Log the current state of the collections array
    console.log(collections);
}
