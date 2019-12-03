"use strict"


function validation() 
{
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
	var confirmPassword = document.getElementById("confirmPassword").value;
	var profilepicture = document.getElementById("profilepicture").value;
	var group = document.getElementById("group").value;
	var gender = document.getElementsByName("gender");
	var ssc = document.getElementById("s").value;
	var hsc = document.getElementById("h").value;
	var bsc = document.getElementById("b").value;
	var day = document.getElementById('day').value;
	var month = document.getElementById('month').value;
	var year = document.getElementById('year').value;
	
	

 
    
  if(name == "")
    {
       alert("Please Fillup Your Name");
    }
	else
	{
		if(name.langth >2)
		{
			alert(" Your Name is wrong ");
		}
			
	}
	
	if(email == "")
        {
            alert("Fillup Email");
        }
  		
    if(username == "")
                {
                    alert("Enter a Valid Username");
                }
				
    if(password == "")
                    {
                        alert("Enter Your Password");
                    }
					
	if(confirmPassword == "")
                    {
                        alert("Enter Your confirmPassword ");
                    }
					
    if(profilepicture == "")
                    {
                        alert("Enter Your profilepicture ");
                    }
					
	if(group == "")
                    {
                        alert("Select Your Blood group");
                    }
	
  
   /*function reset()
{
	document.getElementById('day').value="";
	document.getElementById('month').value="";
	document.getElementById('year').value="";
}

  function day()
   {
	   var day = document.getElementById('day').value;
	     var msg = document.getElementById('dob');
	      if (day=="") {
		    msg.innerHTML="Empty Day value";
   }
	   else
	 {
		   if (day<1 || day>31) {
			   msg.innerHTML="Invalid day";
		}
	}
}

        function month()
{
	var month = document.getElementById('month').value;
	   var msg = document.getElementById('dob');
	    if (month=="") {
		   msg.innerHTML="Empty Month value";
	}  
	   else
	{
		    if (month<1 || day>12) {
			   msg.innerHTML="Invalid Month";
		}
	}
}*/

 /* if(gender[0].checked)
	{
		document.getElementById('genderMessage').innerHTML = "You Select Male";
	}
	else if(gender[1].checked)
	{
		document.getElementById('genderMessage').innerHTML = "You Select Female";
	}
	else if(gender[2].checked)
	{
		document.getElementById('genderMessage').innerHTML = "You Select Other";
	}
	else
	{
		document.getElementById('genderMessage').innerHTML = "Please Select Your Gender";
	}
*/
					
}

