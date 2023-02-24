
function hideWidget() {

   parent.document.getElementById('widget').classList.add('hide');
   parent.document.getElementById('widget').classList.remove('show');
   


}

// function on scroll animation
window.addEventListener('scroll', ()=>{
  let content = document.querySelector('.main-header');
  if(window.scrollY > 50)
    content.classList.add('fadeout');    
  else
    content.classList.remove('fadeout');
});


// function responsible for widget's animation, hiding widget and showing chatsection 
document.getElementById("chatButton").addEventListener("click", function(e){

  let slideWidget = document.querySelector('.animation');
  let chatsec = document.querySelector('.chatBot');

  chatsec.classList.remove('fadeToRight');
  slideWidget.classList.remove('fadeFromLeft');
  slideWidget.classList.add('fadeInLeft');
  document.body.style.backgroundImage = "none";

    setTimeout(function change(){
      chatsec.classList.add('fadeInRight');
      
      chatsec.classList.remove('transitionClass');
    slideWidget.classList.add('transitionClass'); 
  
    
    },200);  

}, false);



// function resposible for going back to the widget
function backtoWidget(){

  let chatsec = document.querySelector('.chatBot');
  let widgetSec = document.querySelector('.animation');

  document.body.style.backgroundImage = "linear-gradient(to bottom, #63d471 0%, #233329 50%, white 50%, white 100% )";
  chatsec.classList.add('transitionClass');


  setTimeout(function change(){
   
    widgetSec.classList.remove('transitionClass');
    widgetSec.classList.remove('fadeInLeft');
    widgetSec.classList.add('fadeFromLeft');
    
  },200);  

}


/// chat js data

const textArea = document.querySelector("textarea");
const MessageArea = document.getElementsByClassName('chat-card');
const sendBtn = document.getElementById('send-btn');

textArea.addEventListener("keyup", e =>{
      
      let scHeight = e.target.scrollHeight;
      textArea.style.height = `${scHeight}px`;
      
});



textArea.addEventListener("keyup", function(e){
  if(e.keyCode == 13) 
  {
    getMessage();
  }
  });
  
sendBtn.addEventListener("click" , function(){getMessage()});

var id = 0;

function getMessage(e){
    var rawText = $("#textArea").val();
    
    if(rawText != "")
    {
      addMessage(rawText, 'self');
        $.ajax({
              data: {
                msg: rawText,
              },
              type: "POST",
              url: "https://www.ptcltndchatbot.com.pk/get",
              mode: 'cors',
            }).done(function (data) {
    
              // if (data.responses.length == 1){
              //   addMessage(data.responses,'user');
              // }
              // else {
              //  addMessage("Sorry No choices avaliable",'user')
              // }

              //////////////////////////////////----Responses----///////////////////////////////////////
              if (data.randomizer == false)
              {
                if (data.responses[0] != "" && data.responses != "empty")
                {
                  addMessage(data.responses[0], 'user');
                }
              }

              //////////////////////////////////----Randomizer/Extra Response----///////////////////////////////////////

              if (data.extra_responses != "empty" && data.extra_responses.length != 0)
              {
                if (data.randomizer == true)
                {
                    var rnd = getRndInteger(0, data.extra_responses.length)

                    if (rnd < data.extra_responses.length)
                    {
                      addMessage(data.extra_responses[rnd], 'user');           //Generate Randon Response
                    }
                    else
                    {
                      addMessage(data.responses[0], 'user');                    //Generate Main Response as Random
                    }
                }
                else
                {
                    for (let i = 0; i < data.extra_responses.length; i++)
                    {
                      addMessage(data.extra_responses[i], 'user');         //Generate All Extra Responses
                    }
                }
              }

              //////////////////////////////////----Choices----///////////////////////////////////////

              if (data.choices != "empty" && data.choices[0] != "")
              {
                  generate_choices(data.choices);
              }

              //////////////////////////////////----External Links----///////////////////////////////////////

              if (data.link != "empty" && data.link[0] != "")
              {
                addMessage(data.link[0],'user');
              }
             
        });
    }
}

function addMessage(msg , type) 
{
  var str="";
  str = `<div class=\"msg-box-${type}\"><img class=\"msg-img-${type}\" src=\"images/${type}.png\"><span class=\"msg-content-${type}\">${msg}</span></div>`;

  $(".chat-card").append(str);
  textArea.value = '';
  textArea.focus();
  textArea.style.height = 'auto';
  $('.chat-card').scrollTop($(".chat-card")[0].scrollHeight);

}

function generate_choices (arr)
{
  var str="";
  str += "<table width = '100%',border=1> <tr>";
  str += "<td style = 'vertical-align:top;'> <\/td>";
  str += "<td>"
  for (var i=0 ; i<arr.length ;i++)
  {
      str += "          <div id='res-msg-"+id+"' class=\"res-msg-text\">";
      str += arr[i];
      str += "          <\/div>";
      id++;
  }
  str += "<\/td>";
  str += "<\/tr><\/table>";
  $(".chat-card").append(str);
  $('.chat-card').scrollTop($(".chat-card")[0].scrollHeight);
}


// clickable choices listener
$(document).on('click', '.res-msg-text', function (event) {
  var node = document.getElementById(event.target.id);
  var str = node.textContent.trim();
  addMessage(str,'self');
  $.ajax({
       data: {
         msg: str,
       },
       type: "POST",
       url: "https://www.ptcltndchatbot.com.pk/get",
       }).done(function (data)
       {
             //////////////////////////////////----Responses----///////////////////////////////////////
             if (data.randomizer == false)
             {
               if (data.responses[0] != "" && data.responses != "empty")
               {
                addMessage(data.responses[0], 'user');
               }
             }

             //////////////////////////////////----Randomizer/Extra Response----///////////////////////////////////////

             if (data.extra_responses != "empty" && data.extra_responses.length != 0)
             {
               if (data.randomizer == true)
               {
                   var rnd = getRndInteger(0, data.extra_responses.length)

                   if (rnd < data.extra_responses.length)
                   {
                    addMessage(data.extra_responses[rnd], 'user');           //Generate Randon Response
                   }
                   else
                   {
                    addMessage(data.responses[0], 'user');                    //Generate Main Response as Random
                   }
               }
               else
               {
                   for (let i = 0; i < data.extra_responses.length; i++)
                   {
                     addMessage(data.extra_responses[i], 'user');         //Generate All Extra Responses
                   }
               }
             }

             //////////////////////////////////----Choices----///////////////////////////////////////

             if (data.choices != "empty" && data.choices[0] != "")
             {
                 generate_choices(data.choices);
             }

             //////////////////////////////////----External Links----///////////////////////////////////////

             if (data.link != "empty" && data.link[0] != "")
             {
              addMessage(data.link[0],'user');
             }

       });
});

// function openCalculator{}

const calcBtn = document.getElementById('calculator-btn');

calcBtn.addEventListener('click', function(e){
  parent.document.getElementById('widget').src = 'calculator.html';
  parent.document.getElementById('widget').classList.remove('widget-size');
  parent.document.getElementById('widget').classList.remove('loc-size');
  parent.document.getElementById('widget').classList.remove('bdq-size');
  parent.document.getElementById('widget').classList.remove('faqs-size');
  parent.document.getElementById('widget').classList.add('cal-size');
  
  // parent.document.getElementById('widget').style.width = '60rem';
  // parent.document.getElementById('widget').style.height = '35rem';
})

const locBtn = document.getElementById('locator-btn');

locBtn.addEventListener('click', function(e){
  parent.document.getElementById('widget').src = 'locator.html';
  parent.document.getElementById('widget').classList.remove('widget-size');
  parent.document.getElementById('widget').classList.remove('bdq-size');
  parent.document.getElementById('widget').classList.remove('cal-size');
  parent.document.getElementById('widget').classList.remove('faqs-size');
  parent.document.getElementById('widget').classList.add('loc-size');
})

const bdqBtn = document.getElementById('bdq-btn');

bdqBtn.addEventListener('click', function(e){
  parent.document.getElementById('widget').src = 'bigdata.html';
  parent.document.getElementById('widget').classList.remove('widget-size');
  parent.document.getElementById('widget').classList.remove('loc-size');
  parent.document.getElementById('widget').classList.remove('cal-size');
  parent.document.getElementById('widget').classList.remove('faqs-size');
  parent.document.getElementById('widget').classList.add('bdq-size');
})



const faqsBtn = document.getElementById('faqs-btn');

faqsBtn.addEventListener('click', function(e){
  parent.document.getElementById('widget').src = 'faqs.html';
  parent.document.getElementById('widget').classList.remove('widget-size');
  parent.document.getElementById('widget').classList.remove('loc-size');
  parent.document.getElementById('widget').classList.remove('cal-size');
  parent.document.getElementById('widget').classList.remove('bdq-size');
  parent.document.getElementById('widget').classList.add('faqs-size');
})

