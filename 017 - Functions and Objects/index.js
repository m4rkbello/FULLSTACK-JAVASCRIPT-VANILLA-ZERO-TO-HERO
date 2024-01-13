//Initializer sa sa array object
let personName = {
    firstName: "mark",
    lastName: "bello",
    age: 24,
    work: "tig lung-ag",

    //object function
    role: function(){
        console.log(`Firstname: ${this.firstName}, Lastname: ${this.lastName}`);
    },

    //nested object
    message: {logs: "ERROR 404!"}
}

let personData = personName;

console.log("PERSON NAME", personName);
console.log("PERSON  DATA", personData);

personData.firstName = "BOY2";

console.log("PERSON NAME", personName);
console.log("PERSON  DATA", personData);

//pag access sa object function
personName.role();


//page access sa nested objects 
console.log(personName.message.logs);



let AddressTracker = {
    philippines:{
        region: {
            province: {
                municipality: {
                    barangay: {
                        purok: {
                            house: "BELLO FAMILY"
                        }
                    }
                }
            }
        }
    }
}


console.log(AddressTracker.philippines.region.province.municipality.barangay.purok.house);






