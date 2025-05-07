








let moon = document.querySelector(".moon");
let navbar = document.querySelector(".navbar");
let idx = 0;
let body = document.querySelector("body");
moon.addEventListener("click",()=>{
    if(idx === 0){
        idx = 1;
        body.style.backgroundColor = "black";
        moon.style.color = "black";
        navbar.style.backgroundColor = "white";
        navbar.style.color = "black";
    }
    else{
    idx = 0;
    body.style.backgroundColor = "white";
    navbar.style.backgroundColor = "black";
    navbar.style.color = "white";
    moon.style.color = "white";
    }
    });













