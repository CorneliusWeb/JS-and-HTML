function validatePassword() {
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirm-password').value;
    let strengthIndicator = document.getElementById('password-strength');
    let errorMessage = document.getElementById('error-message');
    
    let strength = 0;
    //check for characters
    if (password.match(/[a-z]+/)) {
        strength++;
    }
    if (password.match(/[A-Z]+/)) {
        strength++;
    }
    if (password.match(/[0-9]+/)) {
        strength++;
    }
    if (password.match(/[!@#$%^&*(-*/+,.;)'"]+/)) {
        strength++;
    }

    //update strength indicator based on strength value
    if (strength < 1) {
        strengthIndicator.innerHTML = "Please enter a strong password";
    } else if (strength < 2) {
        strengthIndicator.innerHTML = "Weak";
        strengthIndicator.style.color = "red";
    } else if (strength < 3) {
        strengthIndicator.innerHTML = "Medium";
        strengthIndicator.style.color = "orange";
    } else {
        strengthIndicator.innerHTML = "Strong";
        strengthIndicator.style.color = "green";
    }

    //check if password match
    if (password !== confirmPassword) {
        errorMessage.style.display = 'block';
        return false;
    } else {
        errorMessage.style.display = 'none';
        return true;
    }
}