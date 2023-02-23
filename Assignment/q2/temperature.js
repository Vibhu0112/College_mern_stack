function celtofar(t1){
    var t1= parseFloat(t1);
    r1=(t1*1.8)+32;
    document.getElementById('fahrenheit').value=r1;
  }

  function fartocel(t2){
    var t2=parseFloat(t2);
    r2=(t2-32)/1.8;
    document.getElementById('celsius').value=r2;
  }