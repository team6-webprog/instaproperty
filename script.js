window.addEventListener("load", () => {
    document.getElementById('hoverIcon').addEventListener("click", () => {document.getElementById('dropdownContent').classList.toggle("hide");})
})
function validateSignUpForm() {
    //get the values from the form
	var fname = document.getElementById("firstName").value;
    var lname = document.getElementById("lastName").value;
    var mail = document.getElementById("email").value;

    var uname = document.getElementById("userName").value;
	var password1 = document.getElementById("userPassword").value;
    var password2 = document.getElementById("confirmPassword").value;

    //verify all fields have been filled out
	if (mail == "" || fname == "" || lname == "" || uname == "" || password1 == "" || password2 == "") {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

    //verify the password is at least 8 characters long
	else if (password1.length < 8) {
		document.getElementById("errorMsg").innerHTML = "Your password must be at least 8 characters long"
		return false;
	}

    //verify the passwords match
    else if (password1 != password2) { 
        document.getElementById("errorMsg").innerHTML = "Your passwords do not match. Please try again."
        return false; 
    } 

    // Verify the email format using a regular expression
    else if (!isValidEmail(mail)) {
        document.getElementById("errorMsg").innerHTML = "Please enter a valid email address";
        return false;
    }

    // the user has successfully filled out form
	else {
		return true;
	}
}

function validateLoginForm() {
    var uname = document.getElementById("userName").value;
	var password = document.getElementById("userPassword").value;

    // verify all fields have been filled out
    if(uname == "" || password == "") {
        document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
    }

    // the user has successfully filled out form
    return true;
}

//function to validate the email format using a regular expression
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}