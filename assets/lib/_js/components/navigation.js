jQuery(function ($) {

	const NavigationGroupSpan = '.navigation__group > span'; //first level


    const NavigationGroupSubSpan = '.navigation__group-sub > span'; //second level
	const NavigationGroupSub = '.navigation__group-sub > a';

	const MenuLevel2 = '.menu-level--2';

    //burger menu
	$('.js-nav-toggle', $(this)).click(function () {

		$(this).toggleClass('nav--active');
		//$('#block-skp-main-menu').toggleClass('active');
        $('.nav-wrapper').toggleClass('active');

        if (!$('body').hasClass('header--inverted') && $('.nav-wrapper').hasClass('active')) {
			$('body').addClass('header--inverted');
		} else if ($('body').hasClass('header--inverted') && $('.nav-wrapper').hasClass('active')) {
			$('body').addClass('header--inverted');
		} else {
            $('body').removeClass('header--inverted');
        }

		if ($('.search-mobile span').hasClass('js-overlay__close')) {
			$('.search-mobile span').removeClass('active');
			$('.search-mobile span').removeClass('js-overlay__close').addClass('overlay');
			$('.navigation__overlay').removeClass('active').hide();
		}


		if ($(this).hasClass('nav--active')) {

		} else {
            $('.navigation__group-sub.active span').trigger('click');
			$('.js-overlay__close').trigger('click');
		}

	});

    //nav back button
	$('.nav-back-button').click(function () {
        $('.navigation__overlay').removeClass('active').hide();
        $('.menu-level--0 .overlay__navigation, .menu-level--0 navigation__group').removeClass('active');
        $('.menu-level--0 .overlay__navigation').removeClass('js-overlay__close').addClass('overlay');
        $('.navigation__group-sub.active span').trigger('click');

    });
    $('.sub-nav-back-button').click(function () {
        $('.navigation__group-sub.active span').trigger('click');
    });


	$(NavigationGroupSpan).click(function () {
		$(this).parent().toggleClass('active');

		if ($(this).parent().hasClass('active')) {
			$(NavigationGroupSpan).not($(this)).parent().removeClass('active');
			$(NavigationGroupSpan).not($(this)).removeClass('active');

			$(this).addClass('active');
		}
	});

    //hover functions which change background image
    $(NavigationGroupSub).hover(function() {
        const hoverTrigger = $(this).data('associated-image');
        $(":root").css({"--navigation-background-image": 'url('+hoverTrigger+')'});
    });

    $(NavigationGroupSpan).hover(function() {
        const hoverTrigger = $(this).data('associated-image');
        $(":root").css({"--navigation-background-image": 'url('+hoverTrigger+')'});
    });

    $(NavigationGroupSubSpan).hover(function() {
        const hoverTrigger = $(this).data('associated-image');
        $(":root").css({"--navigation-background-image": 'url('+hoverTrigger+')'});
    });

	$(NavigationGroupSubSpan).click(function () {

        $(MenuLevel2).hide().removeClass('active');
            $(MenuLevel2).parent().parent().hide().removeClass('active');
		$(this).parent().toggleClass('active');

        const subnavTrigger = $(this).data('overlay');

		if ($(this).parent().hasClass('active')) {
			$(NavigationGroupSubSpan).not($(this)).parent().removeClass('active');
			$(NavigationGroupSubSpan).not($(this)).removeClass('active');
			$(NavigationGroupSub).removeClass('active');
			$(MenuLevel2).hide();
			//$(this).addClass('active').next(MenuLevel2).show();
            $(subnavTrigger).parent().parent().addClass('active').show();
            $(subnavTrigger).addClass('active').show();

		} else {
            $(subnavTrigger).parent().parent().removeClass('active').hide();
            $(subnavTrigger).removeClass('active').hide();
		}

        // $(subnavTrigger).parent().parent().addClass('active').stop(true, false).fadeIn(350);
        // $(subnavTrigger).addClass('active').stop(true, false).fadeIn(350);

	});

  

	if (detectMobile()) {
		$('.menu-level--1 .navigation__group-sub span').click(function () {
			$(this).parent().parent().parent().parent().addClass('hide');
			$('html,body').animate({ scrollTop: 0 }, 'slow');

		});

		$('.sub-nav-back-button').click(function () {
			$('.grid').removeClass('hide');	
		});

	}
   

	// CLOSES NAVIGATION WHEN CLICKED OUTSIDE
	// $('.main').click(function () {
	// 	$(NavigationGroupSpan).parent().removeClass('active');
	// 	$(NavigationGroupSpan).removeClass('active');
	// 	$(NavigationGroupSubSpan).parent().removeClass('active');
	// 	$(NavigationGroupSubSpan).removeClass('active');
	// 	$(MenuLevel2).hide().removeClass('active');
	// });

});
