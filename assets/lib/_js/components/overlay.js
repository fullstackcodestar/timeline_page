jQuery(function ($) {

    const searchOverlay = '#search-overlay';
    const jsOverlayClose = '.js-overlay__close';
    const LangAttribute = $('html')[0].lang;
    // OVERLAY
    $(document).on('click', '.overlay', function (e) {
        var overlayTrigger = $(this).data('overlay');

        if (!$('body').hasClass('header--inverted')) {
			$('body').addClass('header--inverted');
		}

        // $('body .overlay__bg').delay(350).remove();
        // $('body').append('<div class="overlay__bg"></div>');
        $('.overlay-content-wrapper').removeClass('active').hide();
        //$('.main').addClass('active--search');


        $(overlayTrigger).addClass('active').show();

        if ((overlayTrigger === '#navigation__language')) {
            $('.language__items .' + LangAttribute).addClass('active');
        }
        if ((overlayTrigger === '#navigation__search')) {
            //console.log(overlayTrigger);
            $('.js-nav-toggle').removeClass('nav--active');
            $('.nav-wrapper').removeClass('active');
            //console.log('working');
        }

        // if ($(this).data('overlay') === searchOverlay) {
        //     $('#edit-search-api-fulltext').focus();
        //     $(this).replaceWith('<a class="js-overlay__close" data-overlay="#search-overlay">Close <i class="fas fa-times"></i></a>');
        // }
        if ($(this).hasClass('overlay__navigation')) {
			$('.overlay__navigation').removeClass('active js-overlay__close').addClass('overlay');
			$(this).removeClass('overlay').addClass('active js-overlay__close');

		}
        e.preventDefault();
    });

    // OVERLAY CLOSE
    $(document).on('click', jsOverlayClose, function () {

        // if ($(this).data('overlay') === searchOverlay) {
        //     $(this).replaceWith('<a class="overlay" data-overlay="#search-overlay">Search <i class="fas fa-search"></i></a>');
        // }

        $('.overlay__bg, .overlay-content-wrapper').removeClass('active').hide();
        $('.overlay__bg').delay(350).remove();
        $('.main').removeClass('active--search');
        $('.overlay__navigation').removeClass('active js-overlay__close').addClass('overlay');
        $('.grid').removeClass('hide');

        if ($('body').hasClass('header--inverted')) {
			$('body').removeClass('header--inverted');
		}

        if (!($(this).data('overlay') === '#navigation__language')) {
            $('.nav--active').trigger('click');
        }
        if (detectMobile()) {
            if (($(this).data('overlay') === '#navigation__language')) {
                $('body').addClass('header--inverted');
            }
        }




    });

    // $(document).on('click', '.overlay__bg', function () {
    //     $(jsOverlayClose).trigger('click');
    // });

    var keyEsc = 27;
    $(window.document).keyup(function (e) {
        if (e.keyCode === keyEsc) {
          if ($('body').hasClass('header--inverted')){
            $(jsOverlayClose).trigger('click');
          }
        }
    });

    $('.main').click(function (e) {
      if (($('body').hasClass('header--inverted')) &&
        (!$(e.target).closest('div').hasClass('chosen-container'))) {
          $(jsOverlayClose).trigger('click');
        }
    });


    // TRIGGERS OVERLAY THROUGH URL
	// if (window.location.href.includes('#marketo')) {
	// 	var hash = window.location.hash;
	//     $(`.overlay[data-overlay^="${hash}"]`).one().trigger('click');
	// }

});
