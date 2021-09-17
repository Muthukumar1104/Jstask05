function validate(){
	var name = document.getElementById('name').value

	var pass = document.getElementById('crp').value
	
	var conpass = document.getElementById('cop').value
	
	if (name =="") {
	    document.getElementById('note1').value = "**Please fill the Name field";
	}

	if (name.length <= 20) {
    	document.getElementById('note1').value = "**Name length must be between 2 to 20 characters";
    }
    
    if (name.length < 5) {
    	document.getElementById('note1').value = "**Name length must be above 5 characters";
    }

    if (name.length >= 5) {
    	document.getElementById('note1').value = "valid";
    }

	if (!isNaN(name)) {
		document.getElementById('note1').value = "**Only characters are allowed";
	}

	
	if (pass=="") {
		document.getElementById('note2').value = "**Please fill the Create password field";
	}

    if (pass.length == 8) {
    	document.getElementById('note2').value = "valid";
    }else{
        document.getElementById('note2').value = "**password length must be 8 characters";
    }
	
	if (conpass=="") {
		document.getElementById('note3').value = "**Please fill the Confirm password field";
	}

    if (pass.length == 8) {
    	document.getElementById('note3').value = "valid";
    }else{
    	document.getElementById('note3').value = "**password length must be 8 characters";
    }
	
	if (pass==conpass) {
		document.getElementById('note4').value = "";
		window.alert("form submitted successfully!");

	}else{
       document.getElementById('note4').value = "password is not same";
	}
}
