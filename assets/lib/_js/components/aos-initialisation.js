jQuery(function ($) {
    AOS.init({
        offset: 120, // offset (in px) from the original trigger point
        delay: 50, // values from 0 to 3000, with step 50ms
        duration: 1000, // values from 0 to 3000, with step 50ms
        easing: 'ease-in-out', // default easing for AOS animations
        mirror: false, // whether elements should animate out while scrolling past them
        once: true, // whether animation should happen only once - while scrolling down
        anchorPlacement: 'top-center', // defines which position of the element regarding to window should trigger the animation
        disable: 'phone',
    });
});