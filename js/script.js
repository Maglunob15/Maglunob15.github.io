// Function to toggle the visibility of the dropdown menu
function toggleDropdown() {
    const dropdownMenu = document.querySelector('.dropdown'); // Select the dropdown menu
    // Check if the dropdown menu is currently visible
    if (dropdownMenu.style.transform === 'translateY(0px)') {
        cancel(); // If visible, call the cancel function to hide it
    } else {
        hamburg(); // If hidden, call the hamburg function to show it
    }
}

// Function to show the dropdown menu
function hamburg() {
    const navbar = document.querySelector(".dropdown"); // Select the dropdown menu
    navbar.style.transform = "translateY(0px)"; // Apply transform to show the menu
}

// Function to hide the dropdown menu
function cancel() {
    const navbar = document.querySelector(".dropdown"); // Select the dropdown menu
    navbar.style.transform = "translateY(-500px)"; // Apply transform to hide the menu
}

// Select all anchor links within the dropdown menu
const dropdownLinks = document.querySelectorAll('.dropdown .links a');

// Add click event listeners to each dropdown link
dropdownLinks.forEach(link => {
    link.addEventListener('click', () => {
        const dropdownMenu = document.getElementById('dropdownMenu'); // Select the dropdown menu
        dropdownMenu.style.transform = 'translateY(-500px)'; // Hide the dropdown when a link is clicked
    });
});

// Array of texts to be displayed in the typewriter effect
const texts = [
    "BSCS Student", // First text
    "Athelete" // Second text
];

// Speed of typing effect in milliseconds
let speed = 100; 
const textElements = document.querySelector(".typewriter-text"); // Select the element for the typewriter effect
let textIndex = 0; // Index of the current text to be displayed
let characterIndex = 0; // Index of the current character being typed

// Function to create the typewriter effect by typing out the current text
function typeWriter() {
    // Check if there are more characters to type in the current text
    if (characterIndex < texts[textIndex].length) {
        textElements.innerHTML += texts[textIndex].charAt(characterIndex); // Add the next character to the display
        characterIndex++; // Move to the next character
        setTimeout(typeWriter, speed); // Repeat the process after a specified speed
    } else {
        // After finishing typing, wait before starting to erase
        setTimeout(eraseText, 1000);
    }
}

// Function to create the erase effect by removing characters one by one
function eraseText() {
    // Check if there are any characters left to erase
    if (textElements.innerHTML.length > 0) {
        textElements.innerHTML = textElements.innerHTML.slice(0, -1); // Remove the last character
        setTimeout(eraseText, 50); // Repeat the process after a short delay
    } else {
        // When the text is fully erased, move to the next text
        textIndex = (textIndex + 1) % texts.length; // Cycle through the texts
        characterIndex = 0; // Reset character index
        setTimeout(typeWriter, 500); // Start typing the next text after a delay
    }
}

// Start the typewriter effect when the window loads
window.onload = typeWriter;
