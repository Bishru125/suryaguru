// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Get the viewport width
const viewportWidth = window.innerWidth;

// Animate the cloud to the right side of the screen on scroll
gsap.to("#cloud", {
    x: viewportWidth - 100,
    scrollTrigger: {
        trigger: "#cloud",
        start: "center center",
        end: "top top",
        scrub: true
    }
});

// Animate the bird to the right side of the screen on scroll
gsap.to("#bird", {
    x: viewportWidth - 100,
    scrollTrigger: {
        trigger: "#bird",
        start: "center center",
        end: "bottom top",
        scrub: true
    }
});




// ------------  window animation----------//



// Ensure the DOM is fully loaded before running the animation
document.addEventListener('DOMContentLoaded', () => {
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Function to create scroll animation for a given element
const createScrollAnimation = (element) => {
    gsap.to(element, {
        y: '-180px', // Move upwards by 50px
        duration: 1, // Animation duration of 1 second
        ease: 'power1.inOut', // Easing function for smooth animation
        scrollTrigger: {
            trigger: element, // Element that triggers the animation
            start: "top center", // Animation starts when the top of the element hits the center of the viewport
            end: "top 300px", // Animation ends when the top of the element hits 100px from the top of the viewport
            scrub: true // Smooth scrubbing, the animation follows the scroll
        }
    });
};

// Select elements and create animations
const view1 = document.querySelector('.view-1');
const view2 = document.querySelector('.view-2');
const view3 = document.querySelector('.view-3');

createScrollAnimation(view1);
createScrollAnimation(view2);
createScrollAnimation(view3);
});