// Return true if input is valid

function validateUsername(name) {
	// Length of username should be between 4 to 8
    // It should not contain any whitespace
    if(name.length < 4)
	return false;
    if(name.length > 8)
	return false;
    for(var i = 0;i < name.length; i++)
    {
	if(name[i] == ' ')
	    return false;
    }
    return true;
}

function validatePassword(password) {
	// password should contain alteast 1 uppercase letter, 1 lowercase letter, 1 digit and 1 special characters
    // URL: https://account.cern.ch/account/Help/?kbid=020040
    var isUpper = 0;
    var isLower = 0;
    var isDigit = 0;
    var isSpecial = 0;
    for(var i = 0; i < password.length;i++)
    {
	if(password[i] <= 'Z' && password[i] >= 'A')
	    isUpper++;
	else if(password[i] <= 'z' && password[i] >= 'a')
	    isLower++;
	else if(password[i] <= '9' && password[i] >= '0')
	    isDigit++;
	else
	    isSpecial++;
    }
    console.log(password);
    console.log(isUpper);
    console.log(isLower);
    console.log(isDigit);
    console.log(isSpecial);
    if(isUpper == 0 || isLower == 0 || isDigit == 0 || isSpecial == 0)
       return false;
    return true;
}

function validateCountry(country) {
	// Check if any country is selected
    // Check if country belong to given list: [AF, AL, DZ, AS, AD]
    if(country == "AF" || country == "AL" || country == "DZ" || country == "AS" || country == "AD")
	return true;
    return false;
}

function validateEmail(email) {
    // Check if the email is valid
    var reg = RegExp("([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}");
    return reg.test(email);
}

function validateGender(gender) {
    // Check if any one of radio button is selected
    return true;
}

function validateLanguage(lang) {
	// lang -> list of langs selected
    // Check if atleast one of the checkbox is checked
    return true;
}
