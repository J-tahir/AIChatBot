const calcBtn = document.getElementById('back-btn');
const region = document.getElementById('cal-main');

function backWidget(){
    parent.document.getElementById('widget').src = 'widget.html';
    parent.document.getElementById('widget').classList.remove('cal-size');
    parent.document.getElementById('widget').classList.remove('bdq-size');
    parent.document.getElementById('widget').classList.remove('loc-size');
    parent.document.getElementById('widget').classList.add('widget-size');
  
    // parent.document.getElementById('widget').style.width = '25rem';
    // parent.document.getElementById('widget').style.height = '80vh';
};


$("#single-play-cal").click(function(e)
  {
    e.preventDefault();
    var selected_region = $('#cal-select-region').find('option:selected').val();
    var selected_date = $('#cal-select-date').find('option:selected').val();

    if(selected_region === 'Select Region' && selected_date === 'Select Date'){
      alert("Please select region & date before proceeding");
    }

    else if(selected_region === 'Select Region'){
      alert("Please select region before proceeding");
    }
    else if(selected_date === 'Select Date'){
      alert("Please select date before proceeding");
    }
    else
    {
    var c6_val = $("#pstn").val();
    var c7_val = $("#pstn-vas").val();
    var c8_val = $("#pstn-chrgs").val();
    var c9_val = $("#pstn-voice").val();
    var c10_val = $("#otherchrgs").val();
    var c11_val = $("#bbpkg").val();
    var c12_val = $("#bbvas").val();
    var c13_val = $("#bbchrgs").val();
    var c14_val = $("#smrttv").val();
    var c15_val = $("#iptvchrgs").val();
    var c16_val = $("#eqp").val();
    var c17_val = $("#smrttvnetflix").val();
    var c18_val = $("#ottadd").val(); 
    
    $.ajax({
      data:{
        c6:c6_val,
        c7:c7_val,
        c8:c8_val,
        c9:c9_val,
        c10:c10_val,
        c11:c11_val,
        c12:c12_val,
        c13:c13_val,
        c14:c14_val,
        c15:c15_val,
        c16:c16_val,
        c17:c17_val,
        c18:c18_val,
        RGN:selected_region,
        DATE:selected_date,
      },
      type:"POST",
      url:"https://www.ptcltndchatbot.com.pk/billingCalc_get",
    }).done(function (data)
    {
      document.getElementById("entry").innerHTML = data['entry'];
      document.getElementById("e1").innerHTML = data['e1'];
      document.getElementById("e4").innerHTML = data['e4'];
      document.getElementById("e5").innerHTML = data['e5'];
      document.getElementById("e6").innerHTML = data['e6'];
      document.getElementById("e7").innerHTML = data['e7'];
      document.getElementById("e8").innerHTML = data['e8'];
      document.getElementById("e11").innerHTML = data['e11'];
    }); 
  }
})  


$("#double-play-cal").click(function(e)
  {
    e.preventDefault();
    var selected_region = $('#cal-select-region').find('option:selected').val(); 

    var selected_date = $('#cal-select-date').find('option:selected').val();

    if(selected_region === 'Select Region' && selected_date === 'Select Date'){
      alert("Please select region & date before proceeding");
    }

    else if(selected_region === 'Select Region'){
      alert("Please select region before proceeding");
    }
    
    else if(selected_date === 'Select Date'){
      alert("Please select date before proceeding");
    }
    else{
    var c6_val = $("#d-pstn").val();
    var c7_val = $("#d-pstn-vas").val();
    var c8_val = $("#d-pstn-chrgs").val();
    var c9_val = $("#d-pstn-voice").val();
    var c10_val = $("#d-otherchrgs").val();
    var c11_val = $("#d-bbpkg").val();
    var c12_val = $("#d-bbvas").val();
    var c13_val = $("#d-bbchrgs").val();
    var c14_val = $("#d-smrttv").val();
    var c15_val = $("#d-iptvchrgs").val();
    var c16_val = $("#d-eqp").val();
    var c17_val = $("#d-smrttvnetflix").val();
    var c18_val = $("#d-ottadd").val(); 
    
    
    $.ajax({
      data:{
        c6:c6_val,
        c7:c7_val,
        c8:c8_val,
        c9:c9_val,
        c10:c10_val,
        c11:c11_val,
        c12:c12_val,
        c13:c13_val,
        c14:c14_val,
        c15:c15_val,
        c16:c16_val,
        c17:c17_val,
        c18:c18_val,
        RGN:selected_region,
        DATE:selected_date,
      },
      type:"POST",
      url:"https://www.ptcltndchatbot.com.pk/billingCalc_get",
    }).done(function (data)
    {
      document.getElementById("dentry").innerHTML = data['entry'];
      document.getElementById("d1").innerHTML = data['e1'];
      document.getElementById("d2").innerHTML = data['e2'];
      document.getElementById("d4").innerHTML = data['e4'];
      document.getElementById("d5").innerHTML = data['e5'];
      document.getElementById("d6").innerHTML = data['e6'];
      document.getElementById("d7").innerHTML = data['e7'];
      document.getElementById("d8").innerHTML = data['e8'];
      document.getElementById("d10").innerHTML = data['e10'];
      document.getElementById("d-ts").innerHTML = data['ts'];
      document.getElementById("d11").innerHTML = data['e11'];
      document.getElementById("d12").innerHTML = data['e12'];
      document.getElementById("d-wht").innerHTML = data['wht'];
    }); 
  }
})  



$("#triple-play-cal").click(function(e)
  {
    e.preventDefault();
    var selected_region = $('#cal-select-region').find('option:selected').val(); 
    var selected_date = $('#cal-select-date').find('option:selected').val();

    if(selected_region === 'Select Region' && selected_date === 'Select Date'){
      alert("Please select region & date before proceeding");
    }

    else if(selected_region === 'Select Region'){
      alert("Please select region before proceeding");
    }
    
    else if(selected_date === 'Select Date'){
      alert("Please select date before proceeding");
    }
    else{
    var c6_val = $("#t-pstn").val();
    var c7_val = $("#t-pstn-vas").val();
    var c8_val = $("#t-pstn-chrgs").val();
    var c9_val = $("#t-pstn-voice").val();
    var c10_val = $("#t-otherchrgs").val();
    var c11_val = $("#t-bbpkg").val();
    var c12_val = $("#t-bbvas").val();
    var c13_val = $("#t-bbchrgs").val();
    var c14_val = $("#t-smrttv").val();
    var c15_val = $("#t-iptvchrgs").val();
    var c16_val = $("#t-eqp").val();
    var c17_val = $("#t-smrttvnetflix").val();
    var c18_val = $("#t-ottadd").val(); 
    
    
    $.ajax({
      data:{
        c6:c6_val,
        c7:c7_val,
        c8:c8_val,
        c9:c9_val,
        c10:c10_val,
        c11:c11_val,
        c12:c12_val,
        c13:c13_val,
        c14:c14_val,
        c15:c15_val,
        c16:c16_val,
        c17:c17_val,
        c18:c18_val,
        RGN:selected_region,
        DATE:selected_date,
      },
      type:"POST",
      url:"https://www.ptcltndchatbot.com.pk/billingCalc_get",
    }).done(function (data)
    {
      document.getElementById("tentry").innerHTML = data['entry'];
      document.getElementById("t1").innerHTML = data['e1'];
      document.getElementById("t2").innerHTML = data['e2'];
      document.getElementById("t3").innerHTML = data['e3'];
      document.getElementById("t4").innerHTML = data['e4'];
      document.getElementById("t5").innerHTML = data['e5'];
      document.getElementById("t6").innerHTML = data['e6'];
      document.getElementById("t7").innerHTML = data['e7'];
      document.getElementById("t8").innerHTML = data['e8'];
      document.getElementById("t9").innerHTML = data['e9'];
      document.getElementById("t10").innerHTML = data['e10'];
      document.getElementById("t-ts").innerHTML = data['ts'];
      document.getElementById("t11").innerHTML = data['e11'];
      document.getElementById("t12").innerHTML = data['e12'];
      document.getElementById("t-wht").innerHTML = data['wht'];
    }); 
  } 
})  


function resetSingle(){
  $('#sp-input').find('input[type=number]').val('');

  document.getElementById('e1').innerHTML = '';
  document.getElementById('e4').innerHTML = '';
  document.getElementById('e5').innerHTML = '';
  document.getElementById('e6').innerHTML = '';
  document.getElementById('e7').innerHTML = '';
  document.getElementById('e8').innerHTML = '';
  document.getElementById('e11').innerHTML = '';
  document.getElementById('entry').innerHTML = '';
}

function resetDouble(){
  $('#dp-input').find('input[type=number]').val('');

  document.getElementById('d1').innerHTML = '';
  document.getElementById('d2').innerHTML = '';
  document.getElementById('d4').innerHTML = '';
  document.getElementById('d5').innerHTML = '';
  document.getElementById('d6').innerHTML = '';
  document.getElementById('d7').innerHTML = '';
  document.getElementById('d8').innerHTML = '';
  document.getElementById('d10').innerHTML = '';
  document.getElementById('d11').innerHTML = '';
  document.getElementById('d12').innerHTML = '';
  document.getElementById('dentry').innerHTML = '';
}

function resetTriple(){
  $('#tp-input').find('input[type=number]').val('');

  document.getElementById('t1').innerHTML = '';
  document.getElementById('t2').innerHTML = '';
  document.getElementById('t3').innerHTML = '';
  document.getElementById('t4').innerHTML = '';
  document.getElementById('t5').innerHTML = '';
  document.getElementById('t6').innerHTML = '';
  document.getElementById('t7').innerHTML = '';
  document.getElementById('t8').innerHTML = '';
  document.getElementById('t9').innerHTML = '';
  document.getElementById('t10').innerHTML = '';
  document.getElementById('t11').innerHTML = '';
  document.getElementById('t12').innerHTML = '';
  document.getElementById('tentry').innerHTML = '';
}