    function LeapYear(){
        var year = document.getElementById("num").value;
        if((0==year%4) && (0 != year%100) || (0 == year%400)){
           alert(year+" is a leap year....");
       } else{
           alert(year +" is not a leap year....");
       }      
    }

