document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const messageDiv = document.getElementById('message');

    // Simulated login process
    if (username === 'user' && password === 'pass') {
        messageDiv.textContent = 'Login successful! Welcome to the Cloud Service.';
        messageDiv.style.color = 'green';
    } else {
        messageDiv.textContent = 'Invalid username or password. Please try again.';
        messageDiv.style.color = 'red';
    }
});
