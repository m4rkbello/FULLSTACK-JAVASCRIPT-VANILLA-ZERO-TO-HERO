//FOR LOOP BREAK
let content = "PADAYON LANG DIHA KAYA NIMO LAYO NAKA KUNG UNSA KA SAUNA!";

for(let i=0; i < content.length; i++){
    if(content[i] === 'A'){
        console.log("FOR LOOP BREAK NI", content[i], +i);
        break;
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