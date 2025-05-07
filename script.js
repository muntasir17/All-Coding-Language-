let scrollRevealOption = {
    distance:"15px",
    // origin:"left",
    duration: 900,
};
ScrollReveal().reveal(".one",{
    ...scrollRevealOption,
origin:"left",
});
ScrollReveal().reveal(".one",{
    ...scrollRevealOption,
delay : 500,
});
ScrollReveal().reveal(".two",{
    ...scrollRevealOption,
origin:"bottom",
});
ScrollReveal().reveal(".two",{
    ...scrollRevealOption,
delay : 400,
});
ScrollReveal().reveal(".conta" ,{
    ...scrollRevealOption,
origin:"top",
});
ScrollReveal().reveal(".conta",{
    ...scrollRevealOption,
delay : 400,
});
ScrollReveal().reveal(".foter" ,{
    ...scrollRevealOption,
origin:"top",
});
ScrollReveal().reveal(".foter",{
    ...scrollRevealOption,
delay : 400,
});

ScrollReveal().reveal(".blogs" ,{
    ...scrollRevealOption,
origin:"top",
});
ScrollReveal().reveal(".blogs",{
    ...scrollRevealOption,
delay : 600,
});
ScrollReveal().reveal(".difrent" ,{
    ...scrollRevealOption,
origin:"bottom",
});
ScrollReveal().reveal(".difrent",{
    ...scrollRevealOption,
delay : 400,
});
ScrollReveal().reveal(".importantText" ,{
    ...scrollRevealOption,
origin:"top",
});
ScrollReveal().reveal(".importantText",{
    ...scrollRevealOption,
delay : 300,
});
ScrollReveal().reveal(".librays" ,{
    ...scrollRevealOption,
origin:"left",
});
ScrollReveal().reveal(".librays",{
    ...scrollRevealOption,
delay : 300,
});
ScrollReveal().reveal(".frmawimages" ,{
    ...scrollRevealOption,
origin:"bottom",
});
ScrollReveal().reveal(".frmawimages",{
    ...scrollRevealOption,
delay : 300,
});
let moon = document.querySelector(".moon");
let navbar = document.querySelector(".navbar");
let codinText = document.querySelector(".codinText");
let codinText1 = document.querySelector(".codinText1");
let codinText2 = document.querySelector(".codinText2");
let codinText3 = document.querySelector(".codinText3");
let codinText4 = document.querySelector(".codinText4");
let codinText5 = document.querySelector(".codinText5");
let codinText6 = document.querySelector(".codinText6");
let codinText7 = document.querySelector(".codinText7");
let codinText8 = document.querySelector(".codinText8");
let codinText9 = document.querySelector(".codinText9");
let codinText10 = document.querySelector(".codinText10");

let idx = 0;
let body = document.querySelector("body");
moon.addEventListener("click",()=>{
if(idx === 0){
    idx = 1;
    body.style.backgroundColor = "black";
    moon.style.color = "black";
    navbar.style.backgroundColor = "white";
    navbar.style.color = "black";
    codinText.style.color = "white";
    codinText1.style.color = "white";
    codinText2.style.color = "white";
    codinText3.style.color = "white";
    codinText4.style.color = "white";
    codinText5.style.color = "white";
    codinText6.style.color = "white";
    codinText7.style.color = "white";
    codinText8.style.color = "white";
    codinText9.style.color = "white";
    codinText10.style.color = "white";
}
else{
idx = 0;
body.style.backgroundColor = "white";
navbar.style.backgroundColor = "black";
navbar.style.color = "white";
moon.style.color = "white";
codinText.style.color = "black";
codinText1.style.color = "black";
codinText2.style.color = "black";
codinText3.style.color = "black";
codinText4.style.color = "black";
codinText5.style.color = "black";
codinText6.style.color = "black";
codinText7.style.color = "black";
codinText8.style.color = "black";
codinText9.style.color = "black";
codinText10.style.color = "black";
}
});















