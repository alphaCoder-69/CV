


var mtVar= setInterval(myt,600);
 function myt(){
     if(document.getElementById("ll").style.display!="none")
{
   clearInterval(mtVar);
    if(document.getElementById("role").value=="Leader"){
        document.getElementById("hig").style.display="none";
        document.getElementById("lod1").style.display="none";
        
        alert("Now you will be joining the Whatsapp Group if you are not a leader please do not join the group.");
         window.open('https://chat.whatsapp.com/CpudkXgBfpBKv0ZcP0k4qO','_self');
        
}
    
 }
 }
function lod(){
    if(document.getElementById("name").value!="" || document.getElementById("name").value!=" " || document.getElementById("email").value!="" || document.getElementById("email").value!=" " || document.getElementById("phn").value!="" || document.getElementById("phn").value!=" " || document.getElementById("regd").value!="" || document.getElementById("regd").value!=" " ){
         document.getElementById("lod1").style.display="block";
        
}
   
}

