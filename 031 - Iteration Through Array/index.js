//basic examples
// let items  = [13, 120, 300, 400, 2, 4, 5, 77, 66, 555, 546, 88, 987, 44, 33, 22, 77, 668, 198, 484, 111];

// for(let i = 0; i < items.length; i++){
//     console.log(items[i]);
// }


//LOOPING ARRAY WITH ITEMS 
// let items  = [13, 120, 300, 400, 2, 4, 5, 77, 66, 555, 546, 88, 987, 44, 33, 22, 77, 668, 198, 484, 111];

// items.length = 21;
// items[25] = 30;

// for(let i = 0; i < items.length; i++){
//     if(items[i] !== undefined){
//         console.log(items[i]);
//     }
  
// }


//filtering sample or searching an specific id 
// let datas  = [13, 120, 300, 400, 2, 4, 5, 77, 66, 43, 555, 546, 88, 987, 44, 33, 22, 77, 668, 198, 484, 111];

// datas.length = 21;
// datas[25] = 30;

// let found = false;
// let search = 43;

// for(let i = 0; i < datas.length; i++){
//     if(datas[i] === search){
//         found == true;
//         console.log(datas[i]);
//     }

//     if(found){
//         console.log("DATA HAS BEEN FOUND!");
//     }
// }




//data collection sa InfinIT Solution

// Sample collection of people objects
const people = [
    { name: 'Alice', age: 25, role: 'female' },
    { name: 'Bob', age: 30, role: 'male' },
    { name: 'Charlie', age: 22, role: 'male' },
    { name: 'David', age: 28, role: 'male' },
    { name: 'Eva', age: 27, role: 'female' },
  ];
  
  // Condition for filtering (e.g., selecting people under the age of 30)
  const condition = person => person.age < 30;
  
  // Use filter to select a subset of people based on the condition
  const filteredPeople = people.filter(condition);
  
  // Use a for loop to display information about each selected person
  for (const person of filteredPeople) {
    console.log(`${person.name} - Age: ${person.age}, Gender: ${person.gender}`);
  }
  


  //filtering sample or searching an specific id 
let datas  = [13, 120, 300, 400, 2, 4, 5, 77, 66, 43, 555, 546, 88, 987, 44, 33, 22, 77, 668, 198, 484, 111];

let collections = datas[0];

for(let i = 0; i < datas.length; i++){
    if(datas[i] > collections){
        collections = datas[i];
    }
    
}
console.log(collections);




//UNSAON PAG KUHA SA PINAKADAKO NA NUMBERS SULOD SA ARRAY ONJECT GAMIT FOR LOOP!
let elements = [1, 5, 7, 88, 99 , 500];

let longestNumber = elements[0];

for(let i = 0; i < elements.length; i++){
    if(elements[i] > longestNumber){
        longestNumber = elements[i];
    }

}
console.log("THE LONGEST NUMBER IS:",longestNumber);



//unsaon pagkuha sa data(numbers) na pinakagamay sa collections sa arrays;
// let initializer = [];
let members = [
    [234, 456, 55, 600, 777],
    [22, 55, 666, 88, 999],
    [777, 444, 2325, 756, 7879]
];
let lowestNumber = members[0];

for(let i = 0; i<members.length; i++){
    if(members[i] < lowestNumber){
        lowestNumber = members[i];
    }
}
console.log(lowestNumber);



//object for loop using indexies
let details = [
    {
        name: "MARK BELLO",
        role: "fullstack reactjs, redux and laravel",
        company: "INFINIT SOLUTION",
        wage: 10000
    },
    {
        name: "MARK",
        role: "fullstack reactjs, redux and laravel",
        company: "INFINIT SOLUTION",
        wage: 10000
    },
    {
        name: "BELLO",
        role: "fullstack reactjs, redux and laravel",
        company: "INFINIT SOLUTION",
        wage: 10000
    }
]

for(let walaybilibnato = 0; walaybilibnato<details.length; walaybilibnato++){
    let padayonlang = details[walaybilibnato];

    console.log("DATA", `${padayonlang.name}`);
    console.log("DATA", `${padayonlang.role}`);
    console.log("DATA", `${padayonlang.company}`);
    console.log("DATA", `${padayonlang.wage}`);
}