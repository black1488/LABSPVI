let hours = 0;
let mins = 0;
let seconds = 0;
var start = document.querySelector("#start");
var stopper = document.querySelector("#stop");
var reset = document.querySelector("#reset");
var texthours = document.querySelector("#hours");
var textminutes = document.querySelector("#mins");
var textseconds = document.querySelector("#seconds");

start.addEventListener("click", startCounter); 
stopper.addEventListener("click", stopCounter); 
reset.addEventListener("click", resetCounter); 

function startTimer()
{
  timex = setTimeout(function()
  {
    seconds++;
    if(seconds > 59)
    {
        seconds = 0; mins++;
        if(mins>59) 
        {
            mins=0;hours++;
            if(hours <10)
            {
                texthours.textContent=`0${hours}:`;
            } else texthours.textContent=`${hours}:`;
        }                
        if(mins<10)
        {                     
            textminutes.textContent=`0${mins}:`;
        }else textminutes.textContent=`${hours}:`;
    }    
    if(seconds <10) 
    {
      textseconds.textContent=`0${seconds}`;
    }else textseconds.textContent=`${seconds}`;

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
      hours =0; mins =0; seconds =0;
  texthours.textContent='00:'; textminutes.textContent='00:'; textseconds.textContent='00';
};