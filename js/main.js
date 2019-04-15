(function ($) {

  $('.header-menu-btn').on('click', function() {
    $(this).toggleClass('active');
    $('.header-menu-list').toggleClass('active');
  });

})(jQuery);