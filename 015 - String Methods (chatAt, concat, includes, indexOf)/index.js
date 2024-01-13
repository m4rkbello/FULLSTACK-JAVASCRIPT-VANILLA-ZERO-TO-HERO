//charAT O character At
let programmer ="MARKBELLO";
//ipahon ang mga letter
console.log("CHARACTER AT", (programmer.charAt(8)));

//concat e compress ang words or number or string.
let words ="mark bello";
console.log("CONCAT", words.concat("programmer naka sauna walay ni tou na kaya nimo kakita ang Giunoo sa mga paghago nimo."))


//includes KAY PANGITAON NIYANG WORDS NA includes
let datas = "KAYA NAKO! NAGA SALIG KO SA GINOO! NAGA SALIG KO SA AKUNG CAPASIDAD MAONG NAA KO DIRI!";
//initializer niya 
let search = "SALIG KO SA GINOO!";
//if true ang result? pasabot na nakita niya ang ang variable kay present ang argument
console.log("INCLUDES METHOD", datas.includes(search));

//INDEXOF - IHAPON NIYA ANG LETTER SUGOD SA [0] UNSAY SUGOD SA ARGUMENT NA LETTER: SALIG KO SA GINOO 
let padayon = "KAYA NAKO! NAGA SALIG SA GINOO! NAGA SALIG KO SA AKUNG CAPASIDAD MAONG NAA KO DIRI!";
//initializer niya 
let argument = "L";
//if true ang result? pasabot na nakita niya ang ang variable kay present ang argument
// console.log("INDEXOF METHOD", padayon.indexOf(argument));
//18 ang result

//LASTINDEXOF - IHAPON NIYA ANG LAST LETTER SUGOD SA C GAMIT REVERSE INDEX[0] NA REVERSE UNSAY LAST SA ARGUMENT NA LETTER: SALIG KO SA GINOO 
let padayonlang = "KAYA NAKO! NAGA SALIG SA GINOO! W NAGA SALIG KO SA AKUNG CAPASIDAD MAONG NAA KO DIRI!";
//initializer niya 
let bunal = "W";
//if true ang result? pasabot na nakita niya ang ang variable kay present ang argument
console.log("LASTINDEXOF METHOD", padayonlang.lastIndexOf(bunal));
//32 para sakoa!




















