(function ($) {
  Drupal.behaviors.section_overflow = {
    attach: function (context, settings) {

      let isTablet = window.matchMedia("only screen and (max-width: 768px)").matches;
      let isMobile = window.matchMedia("only screen and (max-width: 480px)").matches;

      if (isTablet) {
        $('.section__overflow-tablet').addClass('section__overflow');
        //class for section__overflow-table
      }

      if (isMobile) {
        $('.section__overflow-mobile').addClass('section__overflow');
      }

      if (!isMobile && !isTablet) {
        $('.section__overflow-desktop').addClass('section__overflow');
      }

      if ('.section__overflow-desktop') {
        $('.section__overflow-desktop').addClass('section__overflow');
      }

      // PERFECT SCROLLBAR
      $('.section__overflow').once('section_overflow').each(function () {
        new PerfectScrollbar($(this)[0]);
      });
      // SECTION OVERFLOW BUTTONS
      $('.section').each(function () {
        var section = $(this);
        if ($(section).find('.section__overflow--button-on').length !== 0) {
          var sectionOverflow = $(this).find('.section__overflow--button-on');
          var column = $(section).find('.column');
          var scrollButtonRight = $(section).find('[data-button="overflow-scroller-right"]');
          var scrollButtonLeft = $(section).find('[data-button="overflow-scroller-left"]');
          var scrollBtn = $(section).find('.overflow-scroller');

          var width = column.width();
          var parentWidth = column.offsetParent().width();
          var padding = parseInt(column.css('padding-right')) * 2;
          var percent = Math.round(100 * (width + padding) / parentWidth);


          $(scrollButtonRight).once('section_overflow').click(function (event) {
            var sectionOverflow = $(this).closest('.overflow-scroller-wrapper').find('.section__overflow');
            let moveValue = sectionOverflow.width() / 100 * percent;
            event.preventDefault();
            $(sectionOverflow).animate({
              scrollLeft: "+=" + moveValue,
            }, "slow");
          });

          $(scrollButtonLeft).once('section_overflow').click(function (event) {
            var sectionOverflow = $(this).closest('.overflow-scroller-wrapper').find('.section__overflow');
            let moveValue = sectionOverflow.width() / 100 * percent;
            event.preventDefault();
            $(sectionOverflow).animate({
              scrollLeft: "-=" + moveValue,
            }, "slow");
          });

          $(sectionOverflow).once('sectionOverflow').each(function(){
            var sectionOverflowBtn = $(this);
            var scrollWidthValue = (($(sectionOverflowBtn)[0].scrollWidth) - ($(sectionOverflowBtn)[0].clientWidth));

            // if scroller is fully left, disable btn
            if ($(sectionOverflow).scrollLeft() == 0){
              $(scrollButtonLeft).addClass('overflow-scroller-btn-disabled');
            }
            // HIDE BTN IF NO OVERFLOW
            function checkOverflow(value){
              if ((value) === 0){
                $(scrollBtn).hide();
              } else {
                $(scrollBtn).show();
              }
            }
            checkOverflow(scrollWidthValue);
            $(window).resize(function(){
              checkOverflow(scrollWidthValue);
            });
          });

          // overflow btn scroll event
          $(sectionOverflow).scroll(function(){
            var scrollWidthValue = (($(this)[0].scrollWidth) - ($(this)[0].clientWidth));
            var scrollLeftValue = (($(this)[0].scrollLeft));

            if ($(this).scrollLeft() > 0){
              $(scrollButtonLeft).removeClass('overflow-scroller-btn-disabled');
            } else {
              $(scrollButtonLeft).addClass('overflow-scroller-btn-disabled');
            }
            if ((scrollWidthValue - scrollLeftValue)<=5){
              $(scrollButtonRight).addClass('overflow-scroller-btn-disabled');
            } else {
              $(scrollButtonRight).removeClass('overflow-scroller-btn-disabled');
            }
          });
        }
      });
    }
  };
}(jQuery));
