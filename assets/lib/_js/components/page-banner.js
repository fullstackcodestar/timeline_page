jQuery(function ($) {
    $( document ).ready(function() {
        $('.js-fullstop-to-rhomb').each(function(){
            $(this).html($(this).html().replace(/\./gi, '<div class="fullstop-rhomb"></div>'));
        });
    });

})
