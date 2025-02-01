(function ($) {

  // CREATE COOKIE
  function createCookie(name, value, days) {
    var expires;

    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toGMTString();
    } else {
      expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + "; path=/";
  }

  // READ COOKIE
  function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) === ' ')
        c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0)
        return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
  }

  // ERASE COOKIE
  function eraseCookie(name) {
    createCookie(name, "", -1);
  }

  // URL REGEX
  $.urlParam = function (name) {
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results == null) {
      return null;
    }
    return decodeURI(results[1]) || 0;
  }

  // FORM COOKIES
  function formCookies() {
    // referrer + source url
    createCookie('url_referrer', document.referrer);
    createCookie('url_source', window.location.href);

    // utm parameters
    if (window.location.href.indexOf("?utm") > -1) {
      // define utm fields from window url
      var utm_source = $.urlParam('utm_source');
      var utm_medium = $.urlParam('utm_medium');
      var utm_campaign = $.urlParam('utm_campaign');
      var utm_term = $.urlParam('utm_term');
      var utm_content = $.urlParam('utm_content');
      //storing utms as cookies
      createCookie('utm_source', utm_source);
      createCookie('utm_medium', utm_medium);
      createCookie('utm_campaign', utm_campaign);
      createCookie('utm_term', utm_term);
      createCookie('utm_content', utm_content);
    }

    // get the cookie values
    var utm_source_cookie = readCookie('utm_source');
    var utm_medium_cookie = readCookie('utm_medium');
    var utm_campaign_cookie = readCookie('utm_campaign');
    var utm_term_cookie = readCookie('utm_term');
    var utm_content_cookie = readCookie('utm_content');

    if (utm_source_cookie != null) {
      $("[aria-label='utm_source']").val(utm_source_cookie);
    }
    if (utm_medium_cookie != null) {
      $("[aria-label='utm_medium']").val(utm_medium_cookie);
    }
    if (utm_campaign_cookie != null) {
      $("[aria-label='utm_campaign']").val(utm_campaign_cookie);
    }
    if (utm_term_cookie != null) {
      $("[aria-label='utm_term']").val(utm_term_cookie);
    }
    if (utm_content_cookie != null) {
      $("[aria-label='utm_content']").val(utm_content_cookie);
    }
    var url_referrer_cookie = readCookie('url_referrer');
    var url_source_cookie = readCookie('url_source');

    if (url_referrer_cookie != null || url_referrer_cookie !== "") {
      $("[aria-label='url_referrer']").val(url_referrer_cookie);
    }
    $("[aria-label='url_source']").val(url_source_cookie);
  }

  // PARTNER FORM FUNC
  function partnerData(name, uid) {
    $("[aria-label='partner_name']").val(name);
    $("[aria-label='partner-uid']").val(uid);
  }

  // PERSPECTIVE FORM FUNC
  function perspectiveData(link, name, owner, campaign_tag) {
    $("[aria-label='hdownload_link']").val(link);
    $("[aria-label='perspective_name']").val(name);
    $("[aria-label='ownership']").val(owner);
    $("[aria-label='campaign_tag']").val(campaign_tag)

    createCookie('perspective_link', link);
    createCookie('perspective_name', name);
  }

  // REMOVE STYLING
  function removeStyling() {
    $('.clickdform *').attr('style', '');
    $('.clickdform.mainDiv').attr('style', '');
    var cdlink = $('link[href*="https://cdn-eu.clickdimensions.com/web/v10/cdform2.min.css"]');
    var cdlink2 = $('link[href*="https://webcontent.simon-kucher.com/web/v10/cdform2.min.css"]');
    $(cdlink).remove();
    $(cdlink2).remove();
    // STRIP WHITESPACE
    $('.clickdform .responsiveRow div').each(function () {
      $(this).html($(this).html().replace(/&nbsp;/gi, ''));
    });
  }

  // DETECT ADBLOCKER
  // function detectAdBlocker() {
  //   let adContainer = document.createElement("div");
  //   let formId = $('div[pageid]');
  //   adContainer.className = "textads banner-ads banner_ads ad-unit ad-zone ad-space adsbox"
  //   adContainer.style.height = "1px"
  //   document.body.appendChild(adContainer);

  //   let x_width = adContainer.offsetHeight;

  //   if (!(x_width) && !($('.clickdform').length)) {
  //     $(formId).each(function () {
  //       $(this).after('<div class="adblocker-container">\
  //       <h3>Whoops! Something went wrong.</h3><span>If you are unable to see the form below,\
  //       and have an Adblocker enabled, please <strong>whitelist our website</strong> & <strong>accept all cookies</strong>.\
  //       <br>You can also contact us by clicking on the following button.<div class="button__wrapper"><a class="button button--4" href="mailto:webalerts@simon-kucher.com?subject=Website Enquiry">\
  //       <span class="button-content">Contact</span><span class="button-icon"><i class="bi bi-arrow-right"></i></span>\
  //       </a></div></div>');
  //     });
  //   }
  // }

  /**
   * Set up Lity form
   */
  function formSetup() {

    $(function () {

      $("#btnSubmit").click(function () {
        $('.clickdform *').attr('style', '');
        var form = $(this).closest('.clickdform');
        var inputs = $(form).find($('[aria-required="true"]')).filter(function () {
          return this.value == "";
        });
        $(inputs).each(function () {
          var item = $(this);
          $(item).css('border-color', '#D97943');
        });
      });
    });

    if ($('div[pageid]').length) {
      removeStyling();
      // detectAdBlocker();
      // REMOVE PRELOADER AND SHOW FORMS
      $('div[pageid]').each(function () {
        $(this).removeClass('form-overlay');
      });
      $(".clickdform").fadeIn();
    }
    // RUN COOKIE FUNCTION
    formCookies();

    $('.form-js').css('pointer-events', 'auto').css('cursor', 'pointer');
    //  CONTACT BTN CLICK
    $(once('form-js-once', '.form-js')).on('click', function (e) {
      removeStyling();
      $('.lity').hide();
      // PARTNER FORM
      if ($('#5mfjuwkree2c5qanoksboa').length) {
        var partner_name = $(this).attr('data-partner');
        var partner_uid = $(this).attr('data-uid');
        partnerData(partner_name, partner_uid);
      }

      // PERSPECTIVE FORM - TEMPLATE AND CAMPAIGN FORM
      if (($('a.form-js[data-download-link][data-owner][data-perspective-name]').length)) {
        var download_link = $(this).attr('data-download-link');
        var perspective_name = $(this).attr('data-perspective-name');
        var perspective_ownership = $(this).attr('data-owner');
        var campaign_tag = $(this).attr('data-campaign-tag');

        perspectiveData(download_link, perspective_name, perspective_ownership, campaign_tag);
      }
      if (document.readyState === 'complete') {
        $(".clickdform").show();
        //$(".lity-close").show();
        formCookies();
        $('div[pageid]').each(function () {
          $(this).removeClass('form-overlay');
        })
      } else {
        $('.lity').remove();
        $(window).on("load", function () {
          $(e.currentTarget).click();
          $(".clickdform").show();
          formCookies();
          $('div[pageid]').each(function () {
            $(this).removeClass('form-overlay');
          });
        });
      }
    });

    // POPUP FORM EVENT LISTENER (FORM = ?FORM=GGJ6UBNYEE2DGANORVIBW)
    if (window.location.href.indexOf("?form") > -1) {
      var form_id = $.urlParam('form');
      lity(`#${form_id}`);

      // PARTNER FORM
      if ($('#5mfjuwkree2c5qanoksboa').length) {
        var partner_name = $(this).attr('data-partner');
        var partner_uid = $(this).attr('data-uid');
        partnerData(partner_name, partner_uid);
      }

      // PERSPECTIVE FORM - TEMPLATE AND CAMPAIGN FORM
      if (($('a.form-js[data-download-link][data-owner][data-perspective-name]').length)) {
        var download_link = $(`a[href="#${form_id}"]`).attr('data-download-link');

        var perspective_name = $(`a[href="#${form_id}"]`).attr('data-perspective-name');
        var perspective_ownership = $(`a[href="#${form_id}"]`).attr('data-owner');
        var campaign_tag = $(`a[href="#${form_id}"]`).attr('data-campaign-tag');

        perspectiveData(download_link, perspective_name, perspective_ownership, campaign_tag);
      }
    }
  }

  /**
   * Load a script into the head and run callback after load
   * @param src
   * @param callback
   */
  function loadScript(src, callback) {
    var script = document.createElement('script');
    script.setAttribute('src', src);
    script.addEventListener('load', callback, {once: true});
    document.head.appendChild(script);
  }

  // wait for element to load
  function waitForElm(selector) {
    return new Promise(resolve => {
        if (document.querySelector(selector)) {
            return resolve(document.querySelector(selector));
        }

        const observer = new MutationObserver(mutations => {
            if (document.querySelector(selector)) {
                observer.disconnect();
                resolve(document.querySelector(selector));
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
  }

  Drupal.behaviors.forms = {

    attach: function (context, settings) {

      $('div[pageid]').addClass('form-overlay');

      loadScript("https://webcontent.simon-kucher.com/web/v10/CDWidgetC.js", function () {
        $(once("lity-forms-setup", 'a.form-js', context)).first().each(function () {
          formSetup();
        });
        // if pageid on page, wait for clickdform div to load & setup form
        if($('div[pageid]').length){
          waitForElm('.clickdform').then((elm) => {
            formSetup();
          });
        }
      });

      // PERSPECTIVE - THANK YOU PAGE
      if ($("#perspectiveThankYouPage").length > 0) {
        $('#perspectiveThankYouPage').on('click', function () {
          var perspective_link_cookie = readCookie('perspective_link');
          if (perspective_link_cookie != null) {
            $(this).attr('href', perspective_link_cookie)
          }
        });
      }
    }
  }
}(jQuery));


