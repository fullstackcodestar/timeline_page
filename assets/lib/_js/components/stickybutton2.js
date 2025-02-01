gsap.registerPlugin(ScrollTrigger);
if(detectMobile()) {
    ScrollTrigger.create({
        animation:gsap.to("#sticky-button2", {
            display: "block",
            height: 30,
        }),   
        scrub: true,
        trigger: "#scroll-trigger",
        start: "top top",
        end: "bottom top",
        toggleActions: "play none reverse none",
        onEnterBack: () => onReverse(),
    });

    $("#close").click(function(e) { 
        gsap.to("#sticky-button2", {
            display: "none",
            height: 0,
        })
    });
}