gsap.registerPlugin(ScrollTrigger);

let xValue = 200;
if(detectMobile()) {
    xValue = 80;
}

ScrollTrigger.create({
    animation:gsap.to("#sticky-button", {
        x: window.innerWidth - xValue,
        // yPercent: 100,
        duration: 0.5,
        zIndex: 999,
        ease: "power1.out",
        onComplete: function() {
            $("#sticky-button").addClass("fixed");
        },
    }),   
    // scrub: true,
    trigger: "#sticky-button",
    start: "top top",
    //end: "bottom top"
    end: "top top",
    pin: "#sticky-button",
    pinSpacing: false,
    toggleActions: "play none reverse none",
    // markers: true,
    onEnterBack: () => onReverse(),
});

ScrollTrigger.create({
    animation:gsap.to("#sticky-button .button", {        
        backgroundColor: "#C80041",
        borderColor: "#C80041",
        color: "#fff",
    }),
    // scrub: true,
    trigger: "#sticky-button",
    start: "top top",
    end: "top top",
    toggleActions: "play none reverse none",
});

if(detectMobile() || window.innerWidth <= 820) {

    ScrollTrigger.create({
        animation:gsap.to("#sticky-button .button-content", {        
            duration: 0.5,
            autoAlpha: 0,
            onComplete: function() {
                $("#sticky-button .button-content").addClass("no-display");
            },
        }),
        // scrub: true,
        trigger: "#sticky-button",
        start: "top top",
        end: "top top",
        // end: "+=25",
        onEnterBack: () => display(),
        toggleActions: "play none reverse none",
    });

    ScrollTrigger.create({
        animation:gsap.to("#sticky-button .button", {        
            delay: 0.25,
            duration: 0.5,
            transformOrigin: "top right",
        }),
        // scrub: true,
        trigger: "#sticky-button",
        start: "top top",
        end: "top top",
        toggleActions: "play none reverse none",
    });
}

function onReverse() {
    $("#sticky-button").removeClass("fixed");
}
function display() {
    $("#sticky-button .button-content").removeClass("no-display");
}
