gsap.registerPlugin(ScrollTrigger);
let transformX = 0
let windowrightPercent = window.innerWidth / 10
let gridLength = gsap.getProperty(".page-banner .grid__wrapper", "width");
let gridHalfLength = gsap.getProperty(".page-banner .grid--span-6", "width");
let buttonLength = gsap.getProperty("#sticky-button4 .button", "width");
if (window.innerWidth >= 1700) {
    transformX = gridLength 
} else if (window.innerWidth < 1700) {
    let temp = (window.innerWidth - buttonLength)
    temp = transformX - windowrightPercent
    transformX = temp
}
console.log(gridLength)
console.log(transformX);
var tl = gsap.timeline ({
    repeat: 0,
    // yoyo: true
    scrollTrigger: {
        trigger: "#sticky-button4",
        start: "top top", 
        toggleActions: "complete none reverse none",
        pin: true,
        pinReparent: true
    }
})

tl.to('#sticky-button4 .button',{
    x: transformX,
    duration: 1,
    
})
// tl.to('#sticky-button4 .button', {
//     backgroundColor: "#E8526B",
//     borderColor: "#E8526B",
//     color: "#fff", 
// }, "<")