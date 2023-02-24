"use strict";
var popup = document.getElementById("widgetFrame");
var widget = document.getElementById("widget");
// var closeCalc = document.getElementById("calculatorFrame");

// function responsible for popping up the widget chatbot

function showWidget() {
  widget.classList.toggle("show");
  widget.classList.remove('hide');



}

// function closeCalculator(){
//   closeCalc.classList.toggle('');
// }


// function responsible for switching icons upon popup 
document.getElementById("icon").addEventListener("click", function(e){
  var target = e.target
  var anim = document.querySelector('.widget-btn');
  target.classList.toggle('pul');
  anim.classList.toggle('btn-animation');
  target.classList.toggle("fa-angle-down")  
  target.classList.toggle("fa-message");
}, false)
 

