document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Dummy credentials for demonstration purposes
    const dummyUsername = 'admin';
    const dummyPassword = 'password';

    if (username === dummyUsername && password === dummyPassword) {
        window.location.href = 'main.html'; // Redirect to main page after successful login
    } else {
        document.getElementById('error').textContent = 'Invalid username or password';
    }
});
