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

function validatePropertyForm() {
    //get the values from the form
	var pname = document.getElementById("p_name").value;
    var paddress = document.getElementById("p_address").value;
    var paddress_city = document.getElementById("p_address_city").value;
    var paddress_state = document.getElementById("p_address_state").value;
    var paddress_zc = document.getElementById("p_address_zc").value;

    var pprice = document.getElementById("p_price").value;

    var ptype = document.getElementById("p_type").value;
    var pstatus = document.getElementById("p_status").value;

    var pbeds = document.getElementById("p_bds").value;
    var pbaths = document.getElementById("p_ba").value;
    var psqft = document.getElementById("p_sqft").value;
        
    var pimage = document.getElementById("p_image").value;


    //verify all fields have been filled out
	if (pname == "" || paddress == "" || paddress_city == "" || paddress_state == "" || paddress_zc == "" || pbeds == "" || pbaths == "" || pprice == "" || ptype == "" || pstatus == "" || psqft == "" || pimage == null) {
		document.getElementById("errorMsg").innerHTML = "Please fill the required fields"
		return false;
	}

    return true;
}

//function to validate the email format using a regular expression
function isValidEmail(email) {
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}