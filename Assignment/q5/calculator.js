function clr(){
    document.getElementById("res").value="";
}


function show(val){
    document.getElementById("res").value+=val;
}

function sol(){
    let a=document.getElementById("res").value;
    let b=eval(a);
    document.getElementById('res').value=b;
}