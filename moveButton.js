let beenPressed = function()
{
    let randomHeight = Math.floor((Math.random()*(window.screen.height-100))+1);
    let randomLeft = Math.floor((Math.random()*(window.screen.width-100))+1);
    button.style.top=randomHeight+"px";
    button.style.left = randomLeft+"px";
    clicksLeft--;
    countElement.innerHTML=clicksLeft;
    if(button.innerHTML=="Click me")
    {
    button.innerHTML="Good work!";
    }
    else if(button.innerHTML=="Good work!")
    {
        button.innerHTML="Keep Going!";
    }
    else
    {
        button.innerHTML="Good work!";
    }
    if(clicksLeft==0)
    {
        button.remove();
        countElement.innerHTML="Wow you really wasted alot of time for no reason";
    }
    if(clicksLeft==25)
    {
        countElement.style.color = "#ff0022";
    }
}
let clicksLeft = 50;
let countElement = document.querySelector("#display");
countElement.innerHTML=clicksLeft;
let button = document.getElementById("here");
button.addEventListener("click",beenPressed);

