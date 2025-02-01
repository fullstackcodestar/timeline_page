jQuery(document).ready(function () {
    // Initially hide the sub-header
    jQuery('.sub-header').css('display', 'none');

    // Detect scroll event
    jQuery(window).scroll(function() {
        // Check the scroll position
        if (jQuery(this).scrollTop() > 200) {
            // Show the sub-header if scrolled more than 200px
            jQuery('.sub-header').css('display', 'block');
        } else {
            // Hide the sub-header if scrolled less than 200px
            jQuery('.sub-header').css('display', 'none');
        }
    });
  // jQuery(".header-box").draggable({ axis: "x", containment: '.header-overflow', scroll: false });
  // jQuery(".header__nav").draggable({ axis: "x", containment: '.nav-container', scroll: false });
  // Store audio element reference
  const audioElement = jQuery('#quote-audio')[0];

  // Play button click handler
  jQuery('.play-image').on('click', function ()
  {
    const audioPath = '../../themes/custom/simon_kucher/templates/block/40th-anniversary-block/assets/audio/' + jQuery(this).data('path');
    const $playButton = jQuery(this);
    const $pauseButton = $playButton.siblings('.pause-image');

    if (audioElement.paused)
    {
      // Reset all other buttons to initial state
      jQuery('.play-image').show();
      jQuery('.pause-image').hide();

      // Play audio and update buttons
      audioElement.src = audioPath;
      audioElement.play()
        .then(() =>
        {
          $playButton.hide();
          $pauseButton.show();
        })
        .catch(error =>
        {
          console.error('Error playing audio:', error);
          // Reset buttons on error
          $playButton.show();
          $pauseButton.hide();
        });
    }
  });

  // Pause button click handler
  jQuery('.pause-image').on('click', function ()
  {
    const $pauseButton = jQuery(this);
    const $playButton = $pauseButton.siblings('.play-image');

    if (!audioElement.paused)
    {
      audioElement.pause();
      $pauseButton.hide();
      $playButton.show();
    }
  });

  // Handle audio ending
  jQuery('#quote-audio').on('ended', function ()
  {
    jQuery('.play-image').show();
    jQuery('.pause-image').hide();
  });

  // Optional: Handle audio errors
  jQuery('#quote-audio').on('error', function ()
  {
    console.error('Audio error:', this.error);
    jQuery('.play-image').show();
    jQuery('.pause-image').hide();
  });



  jQuery('.shaping-card').on('click', function ()
  {
    // Get content from the clicked card
    const title = jQuery(this).find('.shaping-card--title').text();
    const publishInfo = jQuery(this).find('.shaping-card--publish__info').text();
    const description = jQuery(this).find('.shaping-card--description').text()
      .replace('dom...', 'dominate niche markets globally. This concept became a key part of our consulting focus, particularly on helping these firms with pricing and growth strategies.');

    // Populate modal with card content
    jQuery('#carouselModal .book-title').text(title);
    jQuery('#carouselModal .book-subtitle').text(publishInfo);
    jQuery('#carouselModal .book-description').text(description);

    // Show the modal
    jQuery('#carouselModal').modal('show');
  });

  jQuery('.card-popup--btn').on('click', function ()
  {
    // Get content from the clicked card
    const description = jQuery(this).closest('.section-9--diagram__card').find('.diagram-card--description').text();

    // Populate modal with card content
    jQuery('#diagramModal .book-description').text(description);
    // Show the modal
    jQuery('#diagramModal').modal('show');
  });

  jQuery('.video-play--button').on('click', function ()
  {
    const videoElement = jQuery('#videoModal video')[0];
    videoElement.src = '../../themes/custom/simon_kucher/templates/block/40th-anniversary-block/assets/video/' + jQuery(this).data('path');
    jQuery('#videoModal').modal('show');
  });

  // Alternative close method using data-dismiss
  jQuery('[data-dismiss="modal"]').on('click', function ()
  {
    jQuery('.modal').modal('hide');
  });


  jQuery(".section-list-container").each(function ()
  {
    let activeText = jQuery(this).find(".section-lists--item.active p").html();
    jQuery(this).find(".timeline__description").html(activeText);
  });

  jQuery(".section-lists--item").on('click', function ()
  {
    jQuery(".section-list-container .timeline__description").html('');
    jQuery(".section-lists--item").removeClass('active');
    jQuery(this).addClass('active');
    jQuery(".section-list-container .timeline__description").html(jQuery('.section-lists--item.active p').html());
  });
  jQuery(".header__item").on('click', function ()
  {
    jQuery(".header__item").removeClass('highlight');
    jQuery(this).addClass('highlight');
  });

  jQuery('.carousel').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    dots: false,
    prevArrow: `<button type="button" class="slick-custom-arrow slick-prev"> 
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M30 16C30 12.287 28.525 8.72601 25.8995 6.10051C23.274 3.475 19.713 2 16 2C12.287 2 8.72602 3.47499 6.10051 6.1005C3.475 8.72601 2 12.287 2 16C2 19.713 3.475 23.274 6.10051 25.8995C8.72602 28.525 12.287 30 16 30C19.713 30 23.274 28.525 25.8995 25.8995C28.525 23.274 30 19.713 30 16ZM1.17417e-06 16C1.48558e-06 11.7565 1.68571 7.68687 4.68629 4.68629C7.68687 1.68571 11.7565 -2.10826e-06 16 -1.66632e-06C20.2435 -1.22439e-06 24.3131 1.68571 27.3137 4.68629C30.3143 7.68687 32 11.7565 32 16C32 20.2435 30.3143 24.3131 27.3137 27.3137C24.3131 30.3143 20.2435 32 16 32C11.7565 32 7.68687 30.3143 4.68629 27.3137C1.68571 24.3131 8.62759e-07 20.2435 1.17417e-06 16ZM23 17C23.2652 17 23.5196 16.8946 23.7071 16.7071C23.8946 16.5196 24 16.2652 24 16C24 15.7348 23.8946 15.4804 23.7071 15.2929C23.5196 15.1054 23.2652 15 23 15L11.414 15L15.708 10.708C15.801 10.615 15.8747 10.5046 15.925 10.3832C15.9754 10.2617 16.0013 10.1315 16.0013 10C16.0013 9.86851 15.9754 9.73831 15.925 9.61683C15.8747 9.49535 15.801 9.38497 15.708 9.292C15.615 9.19902 15.5046 9.12527 15.3832 9.07495C15.2617 9.02463 15.1315 8.99874 15 8.99874C14.8685 8.99874 14.7383 9.02463 14.6168 9.07495C14.4954 9.12527 14.385 9.19902 14.292 9.292L8.292 15.292C8.19887 15.3849 8.12499 15.4952 8.07458 15.6167C8.02416 15.7382 7.99821 15.8685 7.99821 16C7.99821 16.1315 8.02416 16.2618 8.07458 16.3833C8.12499 16.5048 8.19887 16.6151 8.292 16.708L14.292 22.708C14.385 22.801 14.4954 22.8747 14.6168 22.925C14.7383 22.9754 14.8685 23.0013 15 23.0013C15.1315 23.0013 15.2617 22.9754 15.3832 22.925C15.5046 22.8747 15.615 22.801 15.708 22.708C15.801 22.615 15.8747 22.5046 15.925 22.3832C15.9754 22.2617 16.0013 22.1315 16.0013 22C16.0013 21.8685 15.9754 21.7383 15.925 21.6168C15.8747 21.4954 15.801 21.385 15.708 21.292L11.414 17L23 17Z" fill="black"/>
                        </svg>
                    </button>`,
    nextArrow: `<button type="button" class="slick-custom-arrow slick-next"> 
                        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M2.08984 16C2.08984 19.713 3.56484 23.274 6.19035 25.8995C8.81586 28.525 12.3768 30 16.0898 30C19.8029 30 23.3638 28.525 25.9893 25.8995C28.6148 23.274 30.0898 19.713 30.0898 16C30.0898 12.287 28.6148 8.72601 25.9893 6.1005C23.3638 3.475 19.8029 2 16.0898 2C12.3768 2 8.81586 3.475 6.19035 6.1005C3.56484 8.72601 2.08984 12.287 2.08984 16ZM32.0898 16C32.0898 20.2435 30.4041 24.3131 27.4036 27.3137C24.403 30.3143 20.3333 32 16.0898 32C11.8464 32 7.77672 30.3143 4.77614 27.3137C1.77555 24.3131 0.0898444 20.2435 0.0898442 16C0.0898441 11.7565 1.77555 7.68687 4.77614 4.68629C7.77672 1.68571 11.8464 0 16.0898 0C20.3333 0 24.403 1.68571 27.4036 4.68629C30.4041 7.68687 32.0898 11.7565 32.0898 16ZM9.08984 15C8.82463 15 8.57027 15.1054 8.38274 15.2929C8.1952 15.4804 8.08984 15.7348 8.08984 16C8.08984 16.2652 8.1952 16.5196 8.38274 16.7071C8.57027 16.8946 8.82463 17 9.08984 17L20.6758 17L16.3818 21.292C16.2889 21.385 16.2151 21.4954 16.1648 21.6168C16.1145 21.7383 16.0886 21.8685 16.0886 22C16.0886 22.1315 16.1145 22.2617 16.1648 22.3832C16.2151 22.5046 16.2889 22.615 16.3818 22.708C16.4748 22.801 16.5852 22.8747 16.7067 22.925C16.8282 22.9754 16.9584 23.0013 17.0898 23.0013C17.2213 23.0013 17.3515 22.9754 17.473 22.925C17.5945 22.8747 17.7049 22.801 17.7978 22.708L23.7978 16.708C23.891 16.6151 23.9649 16.5048 24.0153 16.3833C24.0657 16.2618 24.0916 16.1315 24.0916 16C24.0916 15.8685 24.0657 15.7382 24.0153 15.6167C23.9649 15.4952 23.891 15.3849 23.7978 15.292L17.7978 9.292C17.7049 9.19902 17.5945 9.12527 17.473 9.07495C17.3515 9.02464 17.2213 8.99874 17.0898 8.99874C16.9584 8.99874 16.8282 9.02464 16.7067 9.07495C16.5852 9.12527 16.4748 9.19902 16.3818 9.292C16.2889 9.38498 16.2151 9.49535 16.1648 9.61683C16.1145 9.73831 16.0886 9.86851 16.0886 10C16.0886 10.1315 16.1145 10.2617 16.1648 10.3832C16.2151 10.5046 16.2889 10.615 16.3818 10.708L20.6758 15H9.08984Z" fill="black"/>
                        </svg>
                    </button>`,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  const nav = jQuery(".header__nav");
  const navContainer = jQuery(".nav-container");
  const navOverflow = jQuery(".nav-overflow");

  // Calculate containment based on container and content widths
  const calculateContainment = () =>
  {
    const containerWidth = navContainer.width();
    const contentWidth = nav.width();
    const maxOffset = Math.max(0, contentWidth - containerWidth);
    return [-maxOffset, 0, 0, 0];
  };

  // Initialize draggable
  // nav.draggable({
  //   axis: "x",
  //   // containment: calculateContainment(),
  //   scroll: false,
  //   start: function ()
  //   {
  //     nav.addClass("dragging");
  //   },
  //   stop: function ()
  //   {
  //     nav.removeClass("dragging");
  //   }
  // });

  // Update containment on window resize
  // jQuery(window).on('resize', function ()
  // {
  //   nav.draggable("option", "containment", calculateContainment());
  // });


  let lastScrollTop = 0;

  jQuery(window).scroll(function ()
  {
    const currentScrollTop = jQuery(window).scrollTop();

    jQuery('section').each(function ()
    {
      const sectionTop = jQuery(this).offset().top;
      const sectionHeight = jQuery(this).height();

      if (currentScrollTop >= sectionTop - 100 &&
        currentScrollTop < sectionTop + sectionHeight - 100)
      {
        const $navContainer = jQuery('.nav-container');
        const $activeItem = jQuery(`.header__item[href="#${jQuery(this).attr('id')}"]`);

        jQuery('.header__item').removeClass('highlight');
        $activeItem.addClass('highlight');

        const containerWidth = $navContainer.width();
        if ($activeItem.offset())
        {
          const itemOffset = $activeItem.offset().left - $navContainer.offset().left;

          // Ensure active item is visible
          if (itemOffset < 0 || itemOffset > containerWidth)
          {
            const scrollAmount = itemOffset - (containerWidth / 2) + ($activeItem.width() / 2);
            $navContainer.stop().animate({
              scrollLeft: $navContainer.scrollLeft() + scrollAmount
            }, 300);
          }
        }
      }
    });

    lastScrollTop = currentScrollTop;
  });





  // Modified autoplay functionality
  if (window.innerWidth >= 1024)
  {
    jQuery(".section-list-container").each(function ()
    {
      const $container = jQuery(this);
      let currentIndex = 0;
      let interval;

      function moveToNext()
      {
        const $items = $container.find('.section-lists--item');
        $items.eq(currentIndex).removeClass('active');
        currentIndex = (currentIndex + 1) % $items.length;
        const $nextItem = $items.eq(currentIndex);
        $nextItem.addClass('active');
        $container.find(".timeline__description").html($nextItem.find('p').html());
      }
      function startAutoplay()
      {
        interval = setInterval(moveToNext, 7000);
      }
      // Hover events
      $container.hover(
        function ()
        {
          clearInterval(interval);
        },
        function ()
        {
          startAutoplay();
        }
      );
      // Start autoplay
      startAutoplay();
    });
  } else
  {
    // jQuery(".accordion").each(function () {
    //   const $accordion = jQuery(this);
    //   let currentIndex = 0;
    //   let interval;

    //   function moveToNext() {
    //     const $items = $accordion.find('.accordion-item');
    //     const $buttons = $items.find('.accordion-button');
    //     const $collapses = $items.find('.accordion-collapse');

    //     $buttons.eq(currentIndex).addClass('collapsed');
    //     $collapses.eq(currentIndex).removeClass('show');

    //     currentIndex = (currentIndex + 1) % $items.length;

    //     $buttons.eq(currentIndex).removeClass('collapsed');
    //     $collapses.eq(currentIndex).addClass('show');
    //   }

    //   function startAutoplay() {
    //     interval = setInterval(moveToNext, 7000);
    //   }

    //   // Hover events
    //   $accordion.hover(
    //     function () {
    //       clearInterval(interval);
    //     },
    //     function () {
    //       startAutoplay();
    //     }
    //   );

    //   // Start autoplay
    //   startAutoplay();
    // });
  }
});


///////////////////////////////////////////////////////////   Only loads the appropriate script for the device type    ///////////////////////////////////////////////////////////// 
// Create function to load appropriate script
function loadScript(src)
{

  const existingScript = document.querySelector(`script[src="${src}"]`);
  if (existingScript)
  {
    existingScript.remove();
  }

  return new Promise((resolve, reject) =>
  {
    const script = document.createElement('script');
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject();
    document.body.appendChild(script);
  });
}

// Check device and load appropriate script
function initializeAnimation()
{
  const isMobile = window.matchMedia('(max-width: 1023px)').matches;
  var scriptPath = './assets/js/desktop-svg-animation.js';
  document.querySelector(".svg-content").innerHTML = desktopSVG;
  if (isMobile)
  {
    scriptPath = './assets/js/mobile-svg-animation.js';
    document.querySelector(".svg-content").innerHTML = mobileSVG;
  }


  loadScript(scriptPath)
    .then(() => console.log('Animation script loaded successfully'))
    .catch(err => console.error('Error loading animation script:', err));
}

// Add event listener for resize
let timeout;
window.addEventListener('resize', () =>
{
  // Debounce the resize event
  clearTimeout(timeout);
  timeout = setTimeout(() =>
  {
    initializeAnimation();
  }, 250);
});

// Initial load
document.addEventListener('DOMContentLoaded', initializeAnimation);


////////////////////////////////////////////////////////////////        gsap animation initial functions       ///////////////////////////////////////////////////////////////////

// Register required plugins
gsap.registerPlugin(ScrollTrigger, DrawSVGPlugin, MotionPathPlugin);

// Define configuration constants
const SEGMENT_LENGTH = 0.9;
const DEFAULT_EASE = 'power1.inOut';

// Create the main timeline with dynamic scroll length
const timeline = gsap.timeline({
  defaults: { duration: 1, ease: "none" },
  scrollTrigger: {
    trigger: `.svg-content`,
    start: "top top",
    end: `bottom bottom`,
    scrub: 5,
    anticipatePin: 1
  }
});

// Helper function for path animations with normalized timing
const createPathAnimation = (moveId, trackId, duration, ease = DEFAULT_EASE, offset = '<') =>
{

  const sequence = gsap.timeline({});

  sequence
    .fromTo(`#${moveId}`, {
      drawSVG: "0% 0%"
    }, {
      drawSVG: `${SEGMENT_LENGTH * 100}% 0%`,
      ease: ease,
      duration: duration
    })
    .to(`#${moveId}`, {
      drawSVG: "100% 100%",
      ease: ease,
      duration: duration
    })
    .from(`#${trackId}`, {
      drawSVG: "0%",
      ease: ease,
      duration: duration,
    }, offset);

  timeline.add(sequence);
};

const createSinglePathAnimation = (moveSelector, duration, offset = null) =>
{
  const sequence = gsap.timeline({});
  sequence.from(moveSelector, {
    drawSVG: "0%",
    ease: 'power1.inOut',
    duration: duration,
  })
  timeline.add(sequence, offset);

}
const createSegmentPathAnimation = (moveSelector, duration, offset = null) =>
{
  const sequence = gsap.timeline({});
  sequence
    .fromTo(moveSelector, {
      drawSVG: "0% 0%"
    }, {
      drawSVG: `${SEGMENT_LENGTH * 100}% 0%`,
      ease: DEFAULT_EASE,
      duration: duration
    })
    .to(moveSelector, {
      drawSVG: "100% 100%",
      ease: DEFAULT_EASE,
      duration: duration
    })
  timeline.add(sequence, offset);
}

const createClipPathAnimation = (moveId, trackId, duration, direction = 'vertical', ease = DEFAULT_EASE, offset = '<') =>
{
  const sequence = gsap.timeline({});

  // Define clip path values based on direction
  const clipPaths = {
    vertical: {
      initial: "inset(0 0 100% 0)",
      middle: `inset(0 0 ${100 - (SEGMENT_LENGTH * 100)}% 0)`,
      final: "inset(100% 0 0% 0)"
    },
    horizontal: {
      initial: "inset(0 0 0 100%)",
      middle: `inset(0 0 0 ${100 - (SEGMENT_LENGTH * 100)}%)`,
      final: "inset(0 100% 0 0%)"
    }
  };

  // Get the appropriate clip paths for the specified direction
  const paths = clipPaths[direction];

  sequence
    .fromTo(`#${moveId}`, {
      clipPath: paths.initial
    }, {
      clipPath: paths.middle,
      ease: ease,
      duration: duration
    })
    .to(`#${moveId}`, {
      clipPath: paths.final,
      ease: ease,
      duration: duration
    })
    .from(`#${trackId}`, {
      clipPath: paths.initial,
      ease: ease,
      duration: duration,
    }, offset)

  timeline.add(sequence);
};

// Helper function for fade-in animations with normalized timing
const createFadeInAnimation = (moveId, duration, offset = '<') =>
{

  const sequence = gsap.timeline({});

  sequence.fromTo(`${moveId}`,
    { 
      opacity: 0 
    },
    {
      opacity: 1,
      duration: duration,
    },
    offset
  );

  timeline.add(sequence);
};