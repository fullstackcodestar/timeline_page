jQuery(function ($) {

    var largeScreen = window.matchMedia("(min-width: 480px)");

    if(largeScreen.matches){
        $('.section-bg-shape').each(function(){
            var section = $(this);
            // triangle shape top right
            if ($(section).hasClass('section-bg-shape-set--1')){ 
                var shapeSet1 = gsap.utils.toArray('.section-bg-shape-set--1');
                shapeSet1.forEach(shape1 => {
                    gsap.timeline({
                        scrollTrigger: {
                            trigger: shape1,
                            ease:Linear.easeIn,
                            markers: false,
                            start: 'top bottom',
                            end: 'bottom 85%',
                            scrub: true,
                            once: true,
                        }
                    }).fromTo(shape1, {'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }, { 'clip-path': 'polygon(100% 0, 100% 0, 100% 100%, 33% 100%)' });
                })
            // rhomb shape left
            } else if ($(section).hasClass('section-bg-shape-set--2')){
                var shapeSet2 = gsap.utils.toArray('.section-bg-shape-set--2');
                var windowWidth = $(window).width();
                let scaleValue = (windowWidth/($(section).width()))*3.5;
                
                shapeSet2.forEach(shape2 => {
                    gsap.timeline({
                        scrollTrigger: {
                            trigger: shape2,
                            ease:Linear.easeIn,
                            markers: false,
                            start:'center 60%',
                            end: 'bottom 20%',
                            scrub: 4,
                            once: true,
                        }
                    }).fromTo(shape2, {scale: 1}, {scale: scaleValue});
                })
            // triange shape bottom right
            } else if ($(section).hasClass('section-bg-shape-set--3')){
                var shapeSet3 = gsap.utils.toArray('.section-bg-shape-set--3');
                shapeSet3.forEach(shape3 => {
                    gsap.timeline({
                        scrollTrigger: {
                            trigger: shape3,
                            ease:Linear.easeIn,
                            markers: false,
                            start:'top bottom',
                            end: 'center center',
                            scrub: true,
                            once: true,
                    }
                }).fromTo(shape3, { 'clip-path': 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }, { 'clip-path': 'polygon(50% 0, 100% 0, 100% 100%, 100% 100%)' });
                })
            }
        });
    }
})