function dis(x) 
{  
document.getElementById('displayId').innerHTML+=x;
}

function clearDisplay() 
{
  document.getElementById('displayId').innerHTML="";
}
function deleteLast()
{
    var displayValue=document.getElementById('displayId').innerHTML;
    document.getElementById('displayId').innerHTML=displayValue.slice(0,-1);
}
function equal()
{
    var displayValue=document.getElementById('displayId').innerHTML;
    var answer=eval(displayValue);
    document.getElementById('displayId').innerHTML=answer;
      
}