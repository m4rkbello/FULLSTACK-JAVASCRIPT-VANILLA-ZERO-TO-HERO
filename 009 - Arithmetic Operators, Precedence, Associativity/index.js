{
    let precedence1 = 5 + 3 * 12 - 20 / 10;
    let precedence2 = 5 + (3 * 12) - (20 / 10);
    let precedence3 = (5 + 3) * (12 - 20) / 10;
    console.log(precedence1, precedence2, precedence3)
}