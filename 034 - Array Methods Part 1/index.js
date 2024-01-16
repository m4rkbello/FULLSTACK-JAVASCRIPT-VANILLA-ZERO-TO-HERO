//E ADD SA LAST GAMIT .PUSH METHOD!
let data1  = [12, 434, 6456, 33, 34];
data1.push(333);
console.log("PUSH ARRAY METHOD", data1);


//E DELETE ANG LAST INDEX OF ARRAY GAMIT .POP METHOD! - FIFO METHOD
let data2 = ['mark', 'evan'];
let dataPop = data2.pop();
console.log("E REMOVE ANG LAST VALUE SA ARRAY EVAN", data2);


//E ADD NIYA SA PINAKAUNA NA INDEX;
let data3 = [323, 4545, 4546];
data3.unshift(500);
console.log("UNSHIFT METHOD", data3);


//DELETE GAMIT SPLICE
let data4 = [4324, 34545, 4554, 44, 2323, 545];
data4.splice(2, 3); //unang parameter is ihapon ang index[0] to [2] tapos sa ikaduhang parameter magsugod sa 1 
console.log("DELETE GAMIT SPLICE", data4);



//ADDING GAMIT SPLICE 
let data5 = [25, 30, 44, 55, 60];
data5.splice(2, 0, 10041999) //una nga parameter is asa sya magsugod na index[2] = 44 ang 0 is if naa tay deleton sa kani na sample is wala then ang last paramter unsa atung e add 
console.log("ADD NUMBERS GAMIT SPLICE", data5);


let data6 = [1, 2, 5, 6, 7, 8, 10, 40];
data6.splice(2, 4, 0,0,0,0)
console.log("DELETE A MULTIPLE NUMBERS", data6);


