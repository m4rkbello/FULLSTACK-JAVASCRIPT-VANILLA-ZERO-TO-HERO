let currentDate  = new Date();
let miliseconds = Date.now();


console.log("UNSA RUN", currentDate);
console.log("MILISECONDS", miliseconds);

let born = new Date(2024, 0, 4);
let present = new Date(2024, 0, 28);

let oneDay = 1000 * 60 * 60 * 24;


let myExistence = (present - born) / oneDay;

console.log("WHAT", myExistence);