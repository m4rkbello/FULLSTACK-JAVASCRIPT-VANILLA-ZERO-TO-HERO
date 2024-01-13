//initializer
let content = "     KAYA NIMO NA BOI IKAW PA! SALIG LANG!";
let data = "Any application that can be written in JavaScript will eventually be written in JavaScript.";

//substring ang unang paramerter which is 5 is ihapon niya ang letter gamit index[0] tapos ang last parameter kay diha ra sya taman 
console.log(content.substring(0, 16));

//subjster  deprecated
console.log(content.substr(0, 16));

//subjster  same sa substring mag ihap sugod 1 hantod taman 16 tapos ang word na masulod ana is include tapos exclude ang 16
console.log(content.slice(1, 16));

//toUppercase = E CONVERT NA MO DAKO TANAN STRING
console.log(content.toUpperCase());

//toLowerCase = convert as gagmay
console.log(content.toLowerCase());

//trim => kay tanggalon ang space \t or tab \n or new line sa javascript para matanggal ang mga spacing 
console.log(content.trim());


//trimStart => kay tanggalon ang space \t or tab \n or new line sa javascript para matanggal ang mga spacing 
console.log(content.trimStart());

//trim => kay tanggalon ang space \t or tab \n or new line sa javascript para matanggal ang mga spacing 
console.log(content.trimEnd());

//repeat iyang e multiply 
console.log(data.repeat(5));

//split method iyang e convert to array data per word
console.log(content.split(" "))






















