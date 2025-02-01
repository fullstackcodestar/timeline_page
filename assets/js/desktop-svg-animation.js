// Build the animation sequence
// Header animation
createPathAnimation('header-move', 'header-track', 2);

// Pen animation
createFadeInAnimation(".sub-header", 1);
createClipPathAnimation('pen-move', 'pen-track', 2.5);
createClipPathAnimation('pen-bottom-move', 'pen-bottom-track', 1.5, 'horizontal');




// Founder image animation
timeline.fromTo("#section-3--old__photo", {
  opacity: 1,
}, {
  opacity: 0,
  duration: 2,
  ease: DEFAULT_EASE
}, `-=6`);

// Sun animations
createPathAnimation('sun-move', 'sun-track', 1);
createClipPathAnimation('sun1-move', 'sun1-track', 2.5);


timeline.fromTo("#sun", {
  y: 1000,
  transformOrigin: "center",
  ease: "power1.out"
}, {
  y: 0,
  duration: 3,
  ease: "power1.out"
}, '-=8')


// Sun lights animation
const sunLightSequence = gsap.timeline({});
sunLightSequence.fromTo(
  ["#sun-light1", "#sun-light2", "#sun-light3", "#sun-light4", "#sun-light5", "#sun-light6"],
  {
    opacity: 0,
    clipPath: "inset(0 0 100% 0)"
  },
  {
    clipPath: "inset(0 0 0% 0)",
    opacity: 1,
    ease: "power2.inOut",
    duration: 2,
    stagger: {
      each: 0,
      from: 0
    }
  }
);
timeline.add(sunLightSequence, `-=10`);


// Initialize plane animation path
createPathAnimation('plane-move', 'plane-track', 5);


// Create timeline for plane sequence
const planeSequence = gsap.timeline({});

// Define exact intersection points from Figma
const intersectionPoints = {
  'tag-1985': { x: 742, y: 4006, continent: '#Europe', passed: false, year: 1985 },
  'tag-1996': { x: 358, y: 4108, continent: '#North_America', passed: false, year: 1996 },
  'tag-2001': { x: 991, y: 4309, continent: '#Asia_Pacific', passed: false, year: 2001 },
  'tag-2012': { x: 912, y: 4100, continent: '#Middle_East', passed: false, year: 2012 },
  'tag-2013': { x: 440, y: 4331, continent: '#South_America', passed: false, year: 2013 },
  'tag-2014': { x: 655, y: 4250, continent: '#Africa', passed: false, year: 2014 }

};

// Initial state setup
gsap.set(Object.keys(intersectionPoints).map(id => `#${id}`), {
  opacity: 0,
  y: 20
});

gsap.set(['#Europe circle', '#North_America circle', '#South_America circle',
  '#Africa circle', '#Asia_Pacific circle', '#Middle_East circle', '#Asia circle'], {
  opacity: 0,
  scale: 0
});

planeSequence
  .fromTo("#plane",
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1,
    }
  )
  .to("#plane", {
    motionPath: {
      path: "#plane-move",
      align: "#plane-move",
      alignOrigin: [0.9, 0.9],
      autoRotate: -60,
      start: 0,
      end: 1
    },
    ease: 'none',
    duration: 8,
    onUpdate: function () {
      const progress = this.progress();
      const pathLength = document.querySelector("#plane-move").getTotalLength();
      const currentPoint = document.querySelector("#plane-move").getPointAtLength(pathLength * progress);

      // Reset all elements at start of animation
      if (progress === 0) {
        Object.values(intersectionPoints).forEach(point => {
          point.passed = false;
        });
        
        gsap.set(Object.keys(intersectionPoints).map(id => `#${id}`), {
          opacity: 0,
        });

        gsap.set(['#Europe circle', '#North_America circle', '#South_America circle',
          '#Africa circle', '#Asia_Pacific circle', '#Middle_East circle'], {
          opacity: 0,
          scale: 0
        });
      }

      // Check for intersections using exact coordinates
      Object.entries(intersectionPoints).forEach(([tagId, point]) => {
        if (!point.passed) {
          // Define a small tolerance for intersection detection
          const intersectionTolerance = 10;
          const isNearIntersection = 
            Math.abs(currentPoint.x - point.x) < intersectionTolerance &&
            Math.abs(currentPoint.y - point.y) < intersectionTolerance;

          if (isNearIntersection) {
            
            point.passed = true;

            // Animate tag appearance
            gsap.to(`#${tagId}`, {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
              onStart: function() {
                const tagRect = document.querySelector(`#${tagId} rect`);
                if (tagRect) {
                  gsap.to(tagRect, {
                    fill: '#C80041',
                    duration: 0.5,
                    delay: 0.5
                  });
                }
              }
            });

            // Animate continent circles
            const circles = document.querySelectorAll(`${point.continent} circle`);
            circles.forEach((circle, index) => {
              gsap.to(circle, {
                opacity: 1,
                scale: 1,
                duration: 0.8,
                delay: index * 0.1,
                ease: "back.out(1.7)"
              });
            });

            // Reset tag color after animation
            gsap.to(`#${tagId} rect`, {
              fill: '#70797F',
              duration: 0.5,
              delay: 2
            });
          }
        }
      });
    }
  });

// Add plane sequence to main timeline
timeline.add(planeSequence, `-=10`);

// SspringEanimation
const springEquence = gsap.timeline({});
springEquence.fromTo(
  ["#spring-move", "#spring1-track"],
  {
    clipPath: "inset(0 0 100% 0)"
  },
  {
    clipPath: "inset(0 0 0% 0)",
    ease: "power2.inOut",
    duration: 6,
    stagger: {
      each: 0,
      from: 0
    }
  }
);
timeline.add(springEquence, '>');

const dnaEquence = gsap.timeline({});
dnaEquence.from('#dna', {
  opacity: 0,
  duration: 1,
  ease: "none"
})
timeline.add(dnaEquence, "-=1");


createPathAnimation('hand-move', 'hand-track',4);

createClipPathAnimation('team-move', 'team-track', 3);

// // timeline.fromTo(`#card-1`,
// //   { opacity: 0 },
// //   {
// //     opacity: 1,
// //     duration: 1*getTimingMultiplier(),
// //   },
// //   '-=100'
// // );

const section7Card = gsap.timeline({});
section7Card.fromTo(
  ["#card-1", "#card-2", "#card-3", "#card-4"],
  {
    opacity: 0,
    y: 30
  },
  {
    opacity: 1,      // Fade in to fully visible
    y: 0,
    ease: "power2.out",  // Smooth easing function for natural motion
    duration: 4,  // Animation duration for each card
    stagger: {
      each: 1,     // 0.3 seconds delay between each card animation
      from: "start", // Start animation from the first card
      ease: "power1.inOut"   // Linear timing for stagger effect
    }
  }
);
timeline.add(section7Card, `-=6`);


// Audio track animation
createSinglePathAnimation("#audio-track",3,'>');

// Create track animation first but don't add to timeline yet
createClipPathAnimation('butterfly-move', 'butterfly-track', 4);

const butterflySequence = gsap.timeline();
butterflySequence
  .fromTo("#butterfly",
    {
      opacity: 0,
      scale: 0.7
    },
    {
      opacity: 1,
      scale: 1,
      duration: 2, // Increased from 0.1 to 0.5
      ease: "back.out(1.7)"
    }
  )
// .to("#butterfly-body", {
//   skewX: 15,
//   skewY: 5,
//   transformOrigin: "center center",
//   ease: "sin.inOut",
//   repeat: 5,
//   yoyo: true,
//   repeatDelay: 0.2, // Increased from 0.1 to 0.2
//   duration: 2 // Increased from 0.5 to 1
// }, "<");

// Add combined sequence to main timeline with longer overlap
timeline.add(butterflySequence, `-=6`); // Increased from 1.2 to 2

// Diagrams animations with increased duration
createSegmentPathAnimation("#diagram1-move",1,'-=1');
createSegmentPathAnimation("#diagram2-move",1);
createSegmentPathAnimation("#diagram3-move",1);
createSegmentPathAnimation("#diagram4-move",1);

createClipPathAnimation('diagram5-move', 'diagram5-track', 2); // Increased from 0.3

// Mountains animation with slower timing
timeline.fromTo(["#mountain1,#mountain2"], {
  y: 100,
  opacity: 0
}, {
  y: 0,
  opacity: 1,
  ease: DEFAULT_EASE,
  duration: 1, // Increased from 0.5 to 1
  stagger: {
    each: 0.5, // Added 0.3s delay between animations
    from: "start",
    ease: "power1.inOut"
  }
}, `-=2`); // Adjusted overlap timing

// Flag animation with increased duration

// Mountain line animations with adjusted timing
createPathAnimation('mountain1-line-move', 'mountain1-line-track', 0.5);

// Simplified dot animations - group them together with reduced importance


createPathAnimation('mountain2-line-move', 'mountain2-line-track', 0.5);

timeline.fromTo("#flag", {
  y: 50,
  opacity: 0
}, {
  y: 0,
  opacity: 1,
  ease: DEFAULT_EASE,
  duration: 1 // Increased from 0.5 to 1
}, '<');
timeline.fromTo(['#dot1', '#dot2', '#dot3', '#dot4'], {
  opacity: 0
}, {
  opacity: 1,
  duration: 0.4,
  stagger: 0.1
}, '-=1');
// Bottom animations with sequential timing and proper offsets
createClipPathAnimation('mountain-bottom-line-move', 'mountain-bottom-line-track', 4);

timeline.add({}, 1);

createPathAnimation('flower-move', 'flower-track', 5);


const flowerBottomSequence = gsap.timeline({});

flowerBottomSequence
  .fromTo(`#flower-bottom--move`, {
    clipPath: "inset(0 0 100% 0)"
  }, {
    clipPath: `inset(0 0 ${100 - (SEGMENT_LENGTH * 100)}% 0)`,
    ease: DEFAULT_EASE,
    duration: 1
  })
  .to(`#flower-bottom--move`, {
    clipPath: "inset(100% 0 0% 0)",
    ease: DEFAULT_EASE,
    duration: 1
  })
  .from(`#flower-bottom--track`, {
    clipPath: "inset(0 0 100% 0)",
    ease: DEFAULT_EASE,
    duration: 1,
  }, '<')

timeline.add(flowerBottomSequence, '-=1');


// Gradient animation
timeline.fromTo('#gradient-rects',
  { clipPath: "inset(0 0 100% 0)" },
  {
    clipPath: "inset(0 0 0% 0)",
    ease: "power2.inOut",
    duration: 1
  },
  '>'
);


