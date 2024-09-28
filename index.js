let homeScore = 0;
let guestScore = 0;
let home = document.getElementById("homeScore");
let guest = document.getElementById("guest");


function homeOnePlus(){
    homeScore += 1;
    home.innerText= homeScore; 
   
}

function homeTwoPlus(){
    homeScore += 2;
    home.innerText= homeScore; 
   
}

function homeThreePlus(){
    homeScore += 3;
    home.innerText= homeScore; 
   
}

function guestOnePlus(){
    guestScore +=1;
    guest.innerText= guestScore;
   
}



function guestTwoPlus(){
    guestScore +=2;
    guest.innerText = guestScore
   
}



function guestThreePlus(){
    guestScore +=3;
    guest.innerText= guestScore
   
}

function reset () {
    guestScore = 0;
    homeScore = 0;
    home.innerText = homeScore;
    guest.innerText = guestScore;
}




