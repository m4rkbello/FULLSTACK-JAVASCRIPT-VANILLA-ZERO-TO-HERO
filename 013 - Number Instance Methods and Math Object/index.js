//initializer
let x = 23232323235;

//exponent
console.log("EXPONENT", x.toExponential(3));
//toLocalString - butangan ug ang 1000 is 1,000
console.log("EXPONENT", x.toLocaleString(3));
//toFixed - magbutang ug decimail
console.log("TO FIXED", x.toFixed(2));
console.log("TO PRECISION", x.toPrecision(2));

//return premitives like numbers, string 
let data = new Number(1999);
console.log(typeof(data.valueOf()));

//return object 
let data1 = new Number(1999);
console.log(typeof(data1));

//Math. methods
let abs = Math.abs(-36);
let ceiling = Math.ceil(.00000001);
let floor = Math.floor(.9999);
let power = Math.pow(3, 2);
let ROUNDOF = Math.round(4.9);
let roundDown = Math.round(5.1);
let isPositive = Math.sign(-Infinity);
let trunc = Math.trunc(4.999999);

//outputs
console.log("MATH ABS", abs);
console.log("MATH ceiling", ceiling);
console.log("MATH FLOOR", floor);
console.log("MATH POWQER", power);
console.log("MATH ROUNDOF", ROUNDOF);
console.log("MATH ROUNDDOWN", roundDown);
console.log("MATH SIGN", isPositive);
console.log("MATH TRUNCATE", trunc);


