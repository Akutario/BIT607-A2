const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
});


function showConfirmation() {
    // Show confirmation message with an active effect
    const confirmationMessage = document.getElementById('confirmationMessage');
    
    // Display confirmation message
    confirmationMessage.style.display = 'block'; // Ensures the message is visible

    // Add active class for animation (optional for any added effects)
    confirmationMessage.classList.add('active');

    // Hide the form
    document.getElementById('contactForm').style.display = 'none';

    // Optionally, prevent form from actually submitting to the server
    return false;
}

