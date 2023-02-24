const faqsBtn = document.getElementById('back-btn');


function backWidget(){
    parent.document.getElementById('widget').src = 'widget.html';
    parent.document.getElementById('widget').classList.remove('loc-size');
    parent.document.getElementById('widget').classList.remove('cal-size');
    parent.document.getElementById('widget').classList.remove('bdq-size');
    parent.document.getElementById('widget').classList.remove('faqs-size');
    parent.document.getElementById('widget').classList.add('widget-size');
};

function reset(){
    document.querySelector('input').value = "";
    document.getElementById('resultField').innerHTML = "";
}