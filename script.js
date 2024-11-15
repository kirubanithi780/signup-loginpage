// Function to toggle between Signup and Login forms
function toggleForm() {
    const signupForm = document.getElementById('signupForm');
    const loginForm = document.getElementById('loginForm');
    const formTitle = document.getElementById('formTitle');
    const toggleMessage = document.getElementById('toggleMessage');

    if (signupForm.classList.contains('hidden')) {
        signupForm.classList.remove('hidden');
        loginForm.classList.add('hidden');
        formTitle.textContent = 'Signup';
        toggleMessage.innerHTML = `Already have an account? <a href="javascript:void(0);" onclick="toggleForm()">Login</a>`;
    } else {
        signupForm.classList.add('hidden');
        loginForm.classList.remove('hidden');
        formTitle.textContent = 'Login';
        toggleMessage.innerHTML = `Don't have an account? <a href="javascript:void(0);" onclick="toggleForm()">Signup</a>`;
    }
}

// Signup form validation
function validateSignupForm() {
    let username = document.getElementById('signupUsername').value;
    let email = document.getElementById('signupEmail').value;
    let password = document.getElementById('signupPassword').value;
    let confirmPassword = document.getElementById('signupConfirmPassword').value;

    let usernameError = document.getElementById('signupUsernameError');
    let emailError = document.getElementById('signupEmailError');
    let passwordError = document.getElementById('signupPasswordError');
    let confirmPasswordError = document.getElementById('signupConfirmPasswordError');

    let isValid = true;

    // Clear previous error messages
    usernameError.textContent = '';
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    // Username validation
    if (username.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters.';
        isValid = false;
    }

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters.';
        isValid = false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        isValid = false;
    }

    return isValid;
}

// Login form validation
function validateLoginForm() {
    let email = document.getElementById('loginEmail').value;
    let password = document.getElementById('loginPassword').value;

    let loginEmailError = document.getElementById('loginEmailError');
    let loginPasswordError = document.getElementById('loginPasswordError');

    let isValid = true;

    // Clear previous error messages
    loginEmailError.textContent = '';
    loginPasswordError.textContent = '';

    // Email validation
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        loginEmailError.textContent = 'Please enter a valid email address.';
        isValid = false;
    }

    // Password validation
    if (password.length < 6) {
        loginPasswordError.textContent = 'Password must be at least 6 characters.';
        isValid = false;
    }

    // Simulate successful login
    if (isValid) {
        // Store login status in local storage (optional)
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'todo.html'; // Redirect to todo.html
    }

    return false; // Prevent form submission (just for simulation)
}
