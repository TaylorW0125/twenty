let userNum = document.getElementById("getNumber");
userNum.addEventListener("keydown", function(e) {
    if(e.keyCode == 13){
        run(e);
    }

});

userNum.focus();

function run() {
    document.getElementById("paragraph").innerHTML = "Hello! Welcome to the  Number Guesser!";
    document.getElementById("paragraph").style.backgroundColor = "lightgreen";
    document.getElementById("paragraph").style.color = "green"
    document.getElementById("paragraph").style.padding = "20px"
    document.getElementById("paragraph").style.textAlign = "center"
    randomNum();
    userNumber();
    compareNumbers();
}

function randomNum() {
    let ran = Math.floor(Math.random() * 10);
    let x = document.getElementById("random");
    x.innerHTML = ran;
    x.style.backgroundColor = "darkgreen"
    x.innerHTML = ran;
    x.style.backgroundColor = "darkgreen";
    x.style.color = "lightgreen"
    x.style.padding = "20px"
    x.style.textAlign = "center"
    return ran;
}

function userNumber() {
    let user = document.getElementById("getNumber").value;
    let y = document.getElementById("userNumber")
    y.innerHTML = user;
    y.style.color = "green"
    y.style.backgroundColor = "lightgreen"
    y.style.padding = "20px"
    y.style.textAlign = "center"
    return user;
}

function compareNumbers() {
    let a = userNumber();
    let b = randomNum();
    let z = document.getElementById("compare")
    if (a != b) {
        z.innerHTML = "Numbers are not the same. The computer got " + b + ", user got " + a;
        z.style.color = "lightgreen"
        z.style.backgroundColor = "darkgreen"
        z.style.padding = "20px"
        z.style.textAlign = "center"
    } else if ( a == b) {
        z.innerHTML = "Numbers are the same. The computer got " + b + ", user got " + a;
        z.style.color = "darkgreen"
        z.style.backgroundColor = "lightgreen"
        z.style.padding = "20px"
        z.style.textAlign = "center"
    }
    resetInput();
}

function resetInput() {
    document.getElementById("getNumber").value = "";
}