
//character-----------------
function crouch() {
    let character = document.getElementById("character").classList;

    character.add("crouch");
    setTimeout(function () { reseat(character) },1000)

}


function jump() { 
    let character = document.getElementById("character").classList;


    character.add("jump");
    setTimeout(function () { reseat(character) }, 1000);
}
function reseat(character) {
    character.remove("jump");
    character.remove("crouch");

}

//obstacle1----------------------
function obc1() {
    
    let obcDuration,
    char = document.getElementById("character"),
        ptn = 1,
        positonFromTop = 300,
        charHeight = 100;
    
        
    while (ptn != 0) {
    

        obcDuration = difficulty(ptn);
        char.style.animationDuration = `"${obcDuration}ms"` ;
        char.style.animationIterationCount = "infinite";
        if (char.style.top < `${positonFromTop}px` || char.style.height < `${charHeight}px`) {
            ptn++;
        }
    }
}
function difficulty(x) {
    switch (x) {
        case 0:
            x = 2000;
            break;
        default:
            x = 4000;
            break;
            
    }
    return x;
}



//obstacle2----------------------------
function obc2() {
    
    let obcDuration = difficulty(0),
        obcDelay = difficulty2(0);
    
document.getElementById("obstacle").style.animationDuration = `${obcDuration}ms`;
document.getElementById("obstacle").style.animationDelay = `${obcDelay}ms`;
document.getElementById("obstacle").style.animationIterationCount = "infinite";
    
} 


function difficulty2(x) {
    switch (x) {
        case 0:
            x = 3000;
            break;
        default:
            break;
            
    }
    return x;
}
