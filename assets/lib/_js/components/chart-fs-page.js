// // using d3 for convenience
// var main = d3.select("main");
// var scrolly = main.select(".product-scrolly");
// var figure = scrolly.select("figure");
// var article = scrolly.select("article");
// var step = article.selectAll(".step");


// // initialize the scrollama
// // var scroller = scrollama();

// // generic window resize listener event
// function handleResize() {
//     // 1. update height of step elements
//     var stepH = Math.floor(window.innerHeight * 0.75);
//     step.style("height", stepH + "px");

//     var figureHeight = window.innerHeight / 2;
//     var figureMarginTop = (window.innerHeight - figureHeight) / 2;

//     figure
//         .style("height", figureHeight + "px")
//         .style("top", figureMarginTop + "px");

//     // 3. tell scrollama to update new element dimensions
//     scroller.resize();
// }


// // function setupStickyfill() {
// //     d3.selectAll(".sticky").each(function() {
// //         Stickyfill.add(this);
// //     });
// // }

// function init() {
//     setupStickyfill();

//     // 1. force a resize on load to ensure proper dimensions are sent to scrollama
//     handleResize();

//     // 2. setup the scroller passing options
//     // 		this will also initialize trigger observations
//     // 3. bind scrollama event handlers (this can be chained like below)
//     scroller
//         .setup({
//         step: "#scrolly article .step",
//         offset: 0.5,
//         debug: true
//         })
//         .onStepEnter(handleStepEnter);

//     // setup resize event
//     window.addEventListener("resize", handleResize);
// }

// kick things off
// if(!detectMobile()) {
//     init();
// }