const locBtn = document.getElementById('back-btn');


function backWidget(){
    parent.document.getElementById('widget').src = 'widget.html';
    parent.document.getElementById('widget').classList.remove('loc-size');
    parent.document.getElementById('widget').classList.remove('cal-size');
    parent.document.getElementById('widget').classList.remove('bdq-size');
    parent.document.getElementById('widget').classList.add('widget-size');
};

var i = 0;
var txt = "Typing..."

function dataLaoding() {
    if (i < txt.length) {
        document.getElementById('loc-output').innerHTML += txt.charAt(i);
        i++;
      setTimeout(dataLaoding, 50);
    }
}


const addressField = document.querySelector('input');

addressField.addEventListener("keyup", function(e)
{
    var selected_region = $('#loc-select-region').find('option:selected').val();
    var address = addressField.value;

    if(e.keyCode == 13) 
    {
        
        dataLaoding();
        $.ajax({
            
            data: {
                RGN:selected_region,
                doc_2:address,
            },
            type: "POST",
            url: "",
         
        }).done(function (result)
         
        {
            document.getElementById('loc-output').innerHTML = "";
            document.getElementById('loc-output').innerHTML.replace = result;
       
         
        });
  
    }

});


function reset(){
    const addressField = document.querySelector('input').value = "";
    document.getElementById('loc-output').innerHTML = "";
}