function submitForm(){   //form submit function

   for(var i=0;i<3;i++){
     if(document.forms[0].elements[i].value==""){
       alert("Please fill the form");
       document.forms[0].elements[i].focus();
       return false;
      } 

      var pat= /^\d{6}$/
      var regEx= new RegExp(pat);
        if(regEx.test(document.forms[0].elements[2].value)){
           alert('Submitted');
        } 
        else{
            alert("Enter avalid pin ");
            document.forms[0].elements[2].value='';
            document.forms[0].elements[2].focus();
            return false;
        }
     
    }
}



