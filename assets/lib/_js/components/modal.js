(function ($, Drupal) {
  function isInViewport(i, offset) {
    var elementTop = $(i).offset().top;
    var elementBottom = elementTop + $(i).outerHeight();

    var viewportTop = $(window).scrollTop() + offset;
    var viewportBottom = viewportTop + $(window).height() - offset * 2;

    return elementBottom > viewportTop && elementTop < viewportBottom;
  }

  function openModal(modal, screen) {
    const $modal = $(`#${modal}`);

    $modal.data("screen", screen);
    $modal.attr("data-screen", screen);
    $modal.addClass("is-open");

    $modal.find(`[data-screen]`).removeClass("is-active");
    $modal.find(`[data-screen="${screen}"]`).addClass("is-active");
  }

  function closeModal(modal) {
    const $modal = $(`#${modal}`);
    $modal.data("screen", "");
    $modal.attr("data-screen", "");
    $modal.removeClass("is-open");
    $modal.find(`[data-screen]`).removeClass("is-active");
  }

  Drupal.behaviors.modal = {
    attach: function (context, settings) {
      $(".modal")
        .once("modal")
        .each(function () {
          const $modal = $(this);

          $(".js-modal-trigger").click(function (e) {
            e.preventDefault();
            const modal = $(this).data("modal");
            const screen = $(this).data("screen");
            if (screen) {
              return openModal(modal, screen);
            }
            return closeModal(modal);
          });
        });
    },
  };
})(jQuery, Drupal);
