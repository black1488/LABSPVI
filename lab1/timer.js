
let mins = 1;
let seconds = 0;
var start = document.querySelector("#start");
var stopper = document.querySelector("#stop");
var reset = document.querySelector("#reset");

var textminutes = document.querySelector("#mins");
var textseconds = document.querySelector("#seconds");

start.addEventListener("click", startCounter); 
stopper.addEventListener("click", stopCounter); 
reset.addEventListener("click", resetCounter); 

function startTimer()
{
  timex = setTimeout(function()
  {
    seconds--;
    if (seconds < 0 && mins == 0) {
        alert('timeout');
        stopCounter();
        return 0;
    }
    if(seconds < 0)
    {
        seconds = 59; mins--;
        if(mins<0) 
        {
            mins=0;
        }else {textminutes.textContent=`0${mins}:`;textseconds.textContent=`${seconds}`;}            
    }else {textminutes.textContent=`0${mins}:`;textseconds.textContent=`${seconds}`;}
    if (seconds<10) {
        textseconds.textContent=`0${seconds}`;
    }
    startTimer();
  },1000);
}
function startCounter(){
      startTimer();
};

function stopCounter(){
      clearTimeout(timex);
};

function resetCounter(){
      hours =0; mins =1; seconds =0;
       textminutes.textContent='01:'; textseconds.textContent='00';
};
