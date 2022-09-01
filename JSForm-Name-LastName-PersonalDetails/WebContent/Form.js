// una funzione per cancellare tutto
function Cancel() {
alert (''+document.getElementById("Name").value+'  Are you sure to delete all records? ' );
}
function validateForm(){
	var name = document.getElementById("Name").value;
	var lastname = document.getElementById("LastName").value;
	var sex = document.getElementById("Sex").value;
	var email = document.getElementById("Email").value;
	var atEmail = email.indexOf("@");
	var dotEmail = email.lastIndexOf(".");
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	const data = [name,lastname];
	let data0=data[0];
	if(name==null || name.match(/^ *$/) !=null){
		alert("Please insert your name");
		return false;
	}
	if(lastname==null || lastname.match(/^ *$/) !=null){
		alert("Please insert your last name");
		return false;
	}
	if(document.form.Sex.value ==""){
		alert("Please insert your sex");
		return false;
	}
	if(email==null || email.match(/^ *$/) !=null){
		alert("Please insert your Email");
		return false;
	}
	if(!email.match(mailformat)){
		alert("You have entered an invalid email address!");
			return false;
		}
	document.write('<html lang="en" ><head><title>Dispaly Results</title> <link rel="stylesheet" href="DisplayResults.css"></head><body><form name="formDisplay" ><div class="header"><h1 align="left" style="font-size:25px;"><a href="file:///C:/Users/arash/eclipse-workspace/JSForm-Name-LastName-PersonalDetails/WebContent/MainPage.html"  style="width:77px;padding: 10px;" class="button" >Home</a> <a href="file:///C:/Users/arash/eclipse-workspace/JSForm-Name-LastName-PersonalDetails/WebContent/Calculator/JSCalculator.html"  style="width:77px;padding: 10px;" class="button">Calculator</a> <a href="file:///C:/Users/arash/eclipse-workspace/JSForm-Name-LastName-PersonalDetails/WebContent/Form.html"  style="width:77px;padding: 10px;" class="button">Personal Information</a> <img src="file:///C:/Users/arash/eclipse-workspace/JSForm-Name-LastName-PersonalDetails/header.png" alt="Javascript" style="float:right;width:400px;height:80px;text-align: center;" /></h1></div><div  class = "page" style="color:white;font-size: 30px; text-align: center;"><br>&nbsp;&nbsp; Welcome</br> <br>&nbsp;&nbsp;&nbsp;&nbsp;'+name +'   ' +lastname+' </br><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; we saved your information.</br></div></form></body></html>');

	
	/*	if(atEmail<1 || dotEmail<atEmail || dotEmail+2>=email.length){
	alert("The email address is not correct, try again");
	return false;
}*/
	//document.write("<p>Welcome <ul>     "+name+" "+lastname+" </ul> we saved youe information </p>");
}




