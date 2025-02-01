$(document).ready(function(){

    // add active color
    $('g.Circle[data-svg-name="environment"]').addClass('active-icon')

    // initiate carousel
    const swiperBtn = $('.swiper-button')

    // swiper initaition + settings
    var swiper = new Swiper(".swiper", {
        effect: "fade",
        loop: true,
        fadeEffect: { crossFade: true },
        slidesPerView: 1,      
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        // pagination: {
        //     el: ".swiper-pagination",
        //     clickable: false
        // },
    });

    // Activate slider on icon click
    $('g.Circle').click(swiper, function(){
        var data = $(this).attr('data-svg-name'); // get icon name
        $('g.Circle').removeClass('active-icon')

        if (data === 'environment'){
            $(this).addClass('active-icon');
            swiper.slideTo(0);
        } else if (data === 'social'){
            swiper.slideTo(1);
            $(this).addClass('active-icon');
        } else if (data === 'governance'){
            swiper.slideTo(2);
            $(this).addClass('active-icon');
        }
    });

    // activate color change on btn click
    $('.swiper-button').click(function(){
        $('g.Circle').removeClass('active-icon');

        const sliderActive = $('.swiper-slide-active').attr('id');

        if ((sliderActive == 'social-slide')){
          $('g.Circle[data-svg-name="social"]').addClass('active-icon');
        } else if ((sliderActive === 'gov-slide')){
            $('g.Circle[data-svg-name="governance"]').addClass('active-icon');
        } else if ((sliderActive === 'env-slide')){
            $('g.Circle[data-svg-name="environment"]').addClass('active-icon');
        } 
    });
  });