
    // let numbers = prompt("ENTER A NUMBER");
    //old convertions
    // console.log("Decimal is:", numbers);
    // console.log("Binary is:",Number.parseInt(numbers, 2));
    // console.log("Octal is:",Number.parseInt(numbers, 8));
    // console.log("Hex is:",Number.parseInt(numbers, 16));

    //initializer with number convertion
    let data = Number(prompt("ENTER A NUMBER TO CONVERT"));

    //result or convertion
    console.log(data, "in decimal to decimal:", data);
    console.log(data, "in decimal to binary:", data.toString(2));
    console.log(data, "in decimal to octal:", data.toString(8));
    console.log(data, "in decimal to hex:", data.toString(16));




