(function($) {
  Drupal.behaviors.slickSlideshows = {
    attach: function(context, settings) {
      if(settings.hasOwnProperty('slickSlideshows')) {
        $.each(settings.slickSlideshows, function(i, e) {
          $('#' + i, context).slick(e);
        });
      }
    }
  };
})(jQuery);