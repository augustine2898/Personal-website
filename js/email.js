function validateForm() {
    // Get form elements
    var message = document.getElementById('message').value;
    var name = document.querySelector('input[name="First_name"]').value;
    var email = document.querySelector('input[name="email"]').value;

    // Simple validation checks
    if (message.trim() === '') {
        alert('Message cannot be empty');
        return false;
    }

    if (name.trim() === '') {
        alert('Name cannot be empty');
        return false;
    }

    // Email format validation using regular expression
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address');
        return false;
    }

    // If all checks pass, allow form submission
    return true;
}
