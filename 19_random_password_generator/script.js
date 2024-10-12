// Character set for the password
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+~`|}{[]:;?><,./-=';

// Generate a random password
function generatePassword(length = 12) {
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    return password;
}

// Handle Generate Button Click
document.getElementById('generateBtn').addEventListener('click', () => {
    const password = generatePassword();
    document.getElementById('password').value = password;
});

// Handle Copy Button Click
document.getElementById('copyBtn').addEventListener('click', () => {
    const passwordField = document.getElementById('password');
    passwordField.select();
    document.execCommand('copy');
    alert('Password copied to clipboard!');
});
