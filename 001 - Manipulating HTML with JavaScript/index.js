document.getElementById("button").onclick = function(){
    //after maclick ang button mawala mo gawas ang "already confirm"
    document.getElementById("confirm").innerHTML = "ALREADY CONFIRM!";
    //pagclick sa button after ma confirm mawala ang button
    document.getElementById("button").style.display ="none";
}

//pag butangan ug "defer" basahon niya bisan naa sa sulod sa head nag-una
// <!DOCTYPE html>
// <html>
//     <head>
//         <title>FULLSTACK JS VANILLA BY MARKBELLO</title>
//         <script defer src="./001 - Manipulating HTML with JavaScript//index.js"></script>
//     </head>
//     <body>
//         <!--001-->
//         <p id="confirm">CONFIRM PURCHASE?</p>
//         <button id="button">Confirm</button>
//         <!--001-->
//     </body>


// </html>