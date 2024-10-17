// Smooth scrolling for navigation links
const navLinks = document.querySelectorAll('nav ul li a');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default anchor click behavior
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Typing effect in the "About Me" section
const typingText = "Cybersecurity enthusiast and developer with experience in networking and programming. Seeking internship opportunities to apply my skills and grow professionally.";
let index = 0;
const typingSpeed = 50; // Speed of typing (in milliseconds)

function typeEffect() {
    const typingElement = document.getElementById('typing-effect');
    if (index < typingText.length) {
        typingElement.textContent += typingText.charAt(index);
        index++;
        setTimeout(typeEffect, typingSpeed);
    }
}

// Call typing effect on page load
window.onload = function() {
    typeEffect();
};

// Modal functionality
const modals = document.querySelectorAll('.modal');
const projectCards = document.querySelectorAll('.project-card');
const closeButtons = document.querySelectorAll('.close-button');

// Open modal when a project card is clicked
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const modal = document.querySelector(card.getAttribute('data-modal-target'));
        modal.style.display = 'block';
    });
});

// Close modal when the close button is clicked
closeButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.closest('.modal').style.display = 'none';
    });
});

// Close modal when clicking outside the modal content
window.addEventListener('click', (event) => {
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Custom Cursor
const cursor = document.querySelector('.custom-cursor');

document.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`; // Set the top position
    cursor.style.left = `${e.clientX}px`; // Set the left position
});

// Skill Percentage Circle Animation
const skillCards = document.querySelectorAll('.skill-card');

skillCards.forEach(skill => {
    skill.addEventListener('mouseenter', () => {
        const percentageCircle = skill.querySelector('.percentage-circle');
        const circle = percentageCircle.querySelector('circle');
        const percentage = skill.getAttribute('data-skill');
        const circleLength = circle.getTotalLength();
        const offset = circleLength - (circleLength * percentage) / 100;

        percentageCircle.style.display = 'flex'; // Show the circle
        circle.style.strokeDashoffset = offset; // Animate the stroke

        percentageCircle.querySelector('span').textContent = `${percentage}%`; // Update the percentage text
    });

    skill.addEventListener('mouseleave', () => {
        const percentageCircle = skill.querySelector('.percentage-circle');
        const circle = percentageCircle.querySelector('circle');

        percentageCircle.style.display = 'none'; // Hide the circle
        circle.style.strokeDashoffset = 251.2; // Reset the stroke
    });
});
