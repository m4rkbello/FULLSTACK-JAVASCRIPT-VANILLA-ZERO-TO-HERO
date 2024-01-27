//initializer
const data1 = [19, 45, 690,  5465, 1, 100, 1000, 10000];
const data2 = [99, 200];

//e add niya gamit upush method
data2.push();


const dataSlice = data1.slice(3, 6);


//ihapon niya ang unod apiul ang push gamit index [0] if -1 means wala ang number sa collection of arrays
console.log("HA", data2.indexOf(5000));

//kuhaon ang collection sa arrays //e typeOf string na sya
console.log("ARRAY TO STRING", data1.join());
console.log("ARRAY TO STRING WITH TYPE OF", typeof(data1.join()));

//delemeter 
console.log("ARRAY TO STRING WITH DELEMETER", data1.join(", "));

//slice nagsugod sa start ug end [0, 5]
console.log("DATA SLICE", dataSlice); 
//ang output expected is 



//concat e add tanan
let add = data1.concat(data2);
console.log(add)


