

// Build the animation sequence
// Header animation
createPathAnimation('header-move', 'header-track', 4);

// Pen animation
createClipPathAnimation('pen-move', 'pen-track', 8);
createFadeInAnimation(".sub-header", .1);


// Founder image animation

timeline.fromTo("#section-3--old__photo", {
  opacity: 1,
}, {
  opacity: 0,
  duration: 4,
  ease: DEFAULT_EASE
}, `-=11`);

// Sun animations
createPathAnimation('sun-move', 'sun-track', 1);
createClipPathAnimation('sun1-move', 'sun1-track', 5);


timeline.fromTo("#sun", {
  y: 1000,
  transformOrigin: "center",
  ease: "power1.out"
}, {
  y: 0,
  duration: 10,
  ease: "power1.out"
}, '-=20')


// Sun lights animation
const sunLightSequence = gsap.timeline({});
sunLightSequence.fromTo(
  ["#sun-light1", "#sun-light2", "#sun-light3", "#sun-light4", "#sun-light5", "#sun-light6"],
  {
    clipPath: "inset(0 0 100% 0)",
    opacity: 0
  },
  {
    opacity: 1,
    clipPath: "inset(0 0 0% 0)",
    ease: "power2.inOut",
    duration: 2.5,
    stagger: {
      each: 0,
      from: 0
    }
  }
);
timeline.add(sunLightSequence, `-=20`);


// Plane animation
createPathAnimation('plane-move', 'plane-track', 10);

// Plane path drawing and plane movement with synchronized tag and circle reveals
const planeSequence = gsap.timeline({});

// Hide all tags and circles initially
gsap.set(['#tag-1985', '#tag-1996', '#tag-2001', '#tag-2012', '#tag-2013', '#tag-2014'], {
  opacity: 0,
  y: 20
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
      autoRotate: -30,
      start: 0,
      end: 1
    },
    ease: DEFAULT_EASE,
    duration: 20,
    onUpdate: function () {
      const progress = this.progress();
      const pathLength = document.querySelector("#plane-move").getTotalLength();
      const currentPoint = document.querySelector("#plane-move").getPointAtLength(pathLength * progress);

      const tagPositions = {
        'tag-1985': { x: 395.882, y: 5234.19, passed: false },
        'tag-1996': { x: 305.882, y: 5294.19, passed: false },
        'tag-2012': { x: 404.882, y: 5353.19, passed: false },
        'tag-2001': { x: 434.882, y: 5412.19, passed: false },
        'tag-2013': { x: 342.382, y: 5471.19, passed: false }
      };

      if (progress == 0) {
        // Reset tags opacity
        gsap.set(['#tag-1985', '#tag-1996', '#tag-2001', '#tag-2012', '#tag-2013'], {
          opacity: 0,
        });

        // Reset all colors using GSAP
        Object.keys(tagPositions).forEach(tagId => {
          tagPositions[tagId].passed = false;
          const bgRect = document.querySelector(`#${tagId} rect`);
          if (bgRect) {
            gsap.set(bgRect, { fill: '#70797F' });
          }
        });
      }

      Object.entries(tagPositions).forEach(([tagId, position]) => {
        const xDistance = Math.abs(currentPoint.x - position.x);
        const yDistance = Math.abs(currentPoint.y - position.y);
        const totalDistance = Math.sqrt(xDistance * xDistance + yDistance * yDistance);

        const bgRect = document.querySelector(`#${tagId} rect`);

        const isNearTag = xDistance < 50 && yDistance < 50 && totalDistance < 80;
        const hasPassedTag = currentPoint.y > position.y + 20;

        if (!position.passed && isNearTag && !hasPassedTag) {
          // Activate tag
          gsap.to(`#${tagId}`, {
            opacity: 1,
            duration: 0.5,
            ease: "none",
            onStart: function () {
              if (bgRect) {
                // Change to active color
                gsap.to(bgRect, {
                  fill: '#C80041',
                  duration: 0.3
                });
              }
            }
          });
        }
        else if (hasPassedTag && !position.passed) {
          // Mark as passed and revert color
          position.passed = true;
          if (bgRect) {
            gsap.to(bgRect, {
              fill: '#70797F',
              duration: 0.3
            });
          }
        }
      });
    }
  });

// Add to main timeline after path is drawn
timeline.add(planeSequence, `-=22`);

// SspringEanimation
const springEquence = gsap.timeline({});
springEquence.from(
  ["#spring-move", "#spring1-track"],
  {
    drawSVG: "0%",
    ease: "power2.inOut",
    duration: 8,
    stagger: {
      each: 0,
      from: 0
    }
  });
timeline.add(springEquence, '-=10');

const dnaEquence = gsap.timeline({});
dnaEquence.from('#dna', {
  opacity: 0,
  duration: 3,
  ease: "none"
})
timeline.add(dnaEquence, "-=4");


const handSequence = gsap.timeline({});

handSequence
  .fromTo(`#hand-move`, {
    drawSVG: "0% 0%"
  }, {
    drawSVG: `${SEGMENT_LENGTH * 100}% 0%`,
    ease: 'none',
    duration: 4
  })
  .to(`#hand-move`, {
    drawSVG: "100% 100%",
    ease: 'none',
    duration: 4
  })
  .from(`#hand-track`, {
    drawSVG: "0%",
    ease: 'none',
    duration: 4,
  }, '<');

timeline.add(handSequence, '-=2');


createClipPathAnimation('team-move', 'team-track', 8);


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
    duration: 2,  // Animation duration for each card
    stagger: {
      each: .5,     // 0.3 seconds delay between each card animation
      from: "start", // Start animation from the first card
      ease: "power1.inOut"   // Linear timing for stagger effect
    }
  },'<');
timeline.add(section7Card, `-=16`);




createClipPathAnimation('butterfly-move', 'butterfly-track', 6);

const butterflySequence = gsap.timeline();
butterflySequence
  .fromTo("#butterfly",
    {
      opacity: 0,
      scale: 0.6
    },
    {
      opacity: 1,
      scale: 1,
      duration: 4, // Increased from 0.1 to 0.5
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
timeline.add(butterflySequence, `-=14`); // Increased from 1.2 to 2

gsap.timeline({}, 3);

// Diagrams animations with increased duration
createPathAnimation('diagram1-move', 'diagram1-track', 1); // Increased from 0.1
createPathAnimation('diagram2-move', 'diagram2-track', 1);
createPathAnimation('diagram3-move', 'diagram3-track', 1);
createClipPathAnimation('diagram4-move', 'diagram4-track', 2.5); // Increased from 0.3

// Mountains animation with slower timing
timeline.fromTo(["#mountain1,#mountain2"], {
  y: 100,
  opacity: 0
}, {
  y: 0,
  opacity: 1,
  ease: DEFAULT_EASE,
  duration: 2, // Increased from 0.5 to 1
  stagger: {
    each: 0.3, // Added 0.3s delay between animations
    from: "start",
    ease: "power1.inOut"
  }
}, `-=1`); // Adjusted overlap timing

// Flag animation with increased duration

// Mountain line animations with adjusted timing
createPathAnimation('mountain1-line-move', 'mountain1-line-track', 1);

// Simplified dot animations - group them together with reduced importance


createPathAnimation('mountain2-line-move', 'mountain2-line-track', 1);

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
  duration: 0.3,
  stagger: 1
}, '-=8');
// Bottom animations with sequential timing and proper offsets
createClipPathAnimation('mountain-bottom-line-move', 'mountain-bottom-line-track', 4);
createPathAnimation('flower-move', 'flower-track', 5);
createClipPathAnimation('flower-bottom--move', 'flower-bottom--track', 1.5);

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


