//FOR LOOP BREAK
let content = "PADAYON LANG DIHA KAYA NIMO LAYO NAKA KUNG UNSA KA SAUNA!";

for(let i=0; i < content.length; i++){
    if(content[i] === 'A'){
        console.log("FOR LOOP BREAK NI", content[i], +i);
        break;
    }

}


//FOR LOOP BREAK - ICU PARTERN 
let content1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for(let i=0; i < content1.length; i++){
    if(content1[i] === 2){
        console.log("FOR LOOP BREAK NI", content1[i], +i);
        continue;
    }

}


//FOR LOOP GAMIT CONTINUE 
let context = "PADAYON LANG DIHA KAYA NIMO LAYO NAKA KUNG UNSA KA SAUNA!";

for(let i=0; i < context.length; i++){
    if(context[i] === 'PADAYON LANG DIHA'){
        continue;
    }
    console.log("FOR LOOP CONTINUE NI", context[i]);
}