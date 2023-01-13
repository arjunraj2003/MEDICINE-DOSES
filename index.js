function hit(){
    
    var num1,num2,msg;
    num1=document.getElementById("num1").value;
    num2=document.getElementById("num2").value;
    if(num2>=1){
        msg=num1+" "+num2*5+" Dose (millilitres)";
    }
    else if(num2<=0){
        msg="Please enter a valid weight!!!!!"
        document.getElementById("msg").innerHTML=msg;
    }
    document.getElementById("msg").innerHTML=msg;
}