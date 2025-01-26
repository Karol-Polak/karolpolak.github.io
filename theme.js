// Select the theme toggle button
const themeToggle = document.getElementById('theme-toggle');

// Retrieve the current theme from localStorage or default to 'light'
let currentTheme = localStorage.getItem('theme') || 'light';

// Apply the saved theme to the document
document.documentElement.setAttribute('data-theme', currentTheme);

// Update the button text based on the current theme
themeToggle.textContent = currentTheme === 'dark' ? 'Switch to Light' : 'Switch to Dark';

// Add event listener for the theme toggle button
themeToggle.addEventListener('click', () => {
    // Toggle the theme between 'light' and 'dark'
    currentTheme = currentTheme === 'light' ? 'dark' : 'light';

    // Apply the new theme to the document
    document.documentElement.setAttribute('data-theme', currentTheme);

    // Save the new theme in localStorage
    localStorage.setItem('theme', currentTheme);

    // Update the button text
    themeToggle.textContent = currentTheme === 'dark' ? 'Switch to Light' : 'Switch to Dark';
});
