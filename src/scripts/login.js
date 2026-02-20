document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const errorMessage = document.getElementById('error-message');
    const togglePassword = document.getElementById('togglePassword');

    // Password visibility toggle
    if (togglePassword) {
        togglePassword.addEventListener('click', function() {
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            this.classList.toggle('fa-eye');
            this.classList.toggle('fa-eye-slash');
        });
    }

    // Form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();
        errorMessage.textContent = '';
        errorMessage.classList.remove('show');

        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Validation
        if (username.length < 3) {
            showError('Username must be at least 3 characters long.');
            return;
        }

        if (password.length < 6) {
            showError('Password must be at least 6 characters long.');
            return;
        }

        // Simulate login process
        console.log('Form submitted with:', { username, password });
        loginForm.style.opacity = '0.5';
        loginForm.style.pointerEvents = 'none';

        // Simulate API call
        setTimeout(() => {
            loginForm.style.opacity = '1';
            loginForm.style.pointerEvents = 'auto';
            alert('✓ Login successful!\nWelcome back, ' + username + '!');
            loginForm.reset();
            passwordInput.setAttribute('type', 'password');
            togglePassword.classList.remove('fa-eye-slash');
            togglePassword.classList.add('fa-eye');
        }, 1500);
    });

    // Social login buttons
    const socialBtns = document.querySelectorAll('.social-btn');
    socialBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const provider = this.className.split(' ')[1];
            alert('Redirecting to ' + provider + ' login...');
            console.log('Social login with:', provider);
        });
    });

    function showError(message) {
        errorMessage.textContent = message;
        errorMessage.classList.add('show');
    }

    // Add input focus effects
    usernameInput.addEventListener('focus', function() {
        this.parentElement.style.background = '#fff';
    });

    passwordInput.addEventListener('focus', function() {
        this.parentElement.style.background = '#fff';
    });

    // Real-time validation feedback
    usernameInput.addEventListener('blur', function() {
        if (this.value.length > 0 && this.value.length < 3) {
            showError('Username is too short.');
        } else {
            errorMessage.classList.remove('show');
        }
    });

    passwordInput.addEventListener('blur', function() {
        if (this.value.length > 0 && this.value.length < 6) {
            showError('Password is too short.');
        } else {
            errorMessage.classList.remove('show');
        }
    });
});