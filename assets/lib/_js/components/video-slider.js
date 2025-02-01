$(document).ready(function(){

    const swiperBtn = $('.swiper-button')

    // swiper initaition + settings
    var swiper = new Swiper(".swiper", {
      effect: "coverflow",
      grabCursor: true,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 3,
        slideShadows: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      loop: true,
      pagination: {
        el: ".swiper-pagination",
        clickable: false
      },
      breakpoints: {
        640: {
          slidesPerView: 2
        },
        768: {
          slidesPerView: 2
        },
        1024: {
          slidesPerView: 2
        },
        1560: {
          slidesPerView: 2
        }
      }
    });
  
    // pause videos on next/prev btn click
    $(swiperBtn).click(function(){
      stopAllYouTubeVideos();
    });
  
    var stopAllYouTubeVideos = () => { 

      var iframes = document.querySelectorAll('iframe');

      Array.prototype.forEach.call(iframes, iframe => { 
        iframe.contentWindow.postMessage(JSON.stringify({ event: 'command', 
      func: 'pauseVideo' }), '*');
     });
    }
  });