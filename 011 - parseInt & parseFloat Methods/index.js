{
    let x = 5;
    let y = "10";

    //parseInt whole number iyang kuhaon mo gana sya bisag naka string basta naay numbers 
    let yInt = Number.parseInt("10.00000 DATA");

    //parseFloat kuhaon tanan niyang float decimals bisag naka string basta naay numbers
    let xFloat = Number.parseFloat("54.77777777767")

    console.log("DATA OF parseInt", x + yInt);
    console.log("DATA OF parseFloat", x + xFloat);
}