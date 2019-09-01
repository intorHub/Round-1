// vars
var lvl = 1;
var points = document.getElementsByClassName("points");
var score = document.getElementsByClassName("score");
var missedClicks = document.getElementsByName("numOfMissed");
var grade = 0;
var missedClicks = 0;
// timer
var mins = 0;
var secs = 0;
var startBtn = document.getElementById("startBtn");
var spinDiv = document.getElementById("spinner");


function startGame(){
    secs = 60;
    startBtn.style.display = "none";        //hide the start button
    spinDiv.style.display = "block";           // unhide the spiner

};
    

function goodClick(){
grade=grade + lvl * 10;

};

function badClick(){
grade = grade-lvl;
missedClicks++;
};
    
 

    function spin(){
         document.getElementsByClassName("spinner").style = 'color=red';

        }        
;
