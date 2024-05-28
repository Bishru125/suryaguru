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


