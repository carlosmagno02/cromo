$(function() {
    $('.dropdowns').click(function() {
      $(this).next('.dropdowns-menu').toggle();
    });
    $(document).click(function(e) {
      var target = e.target;
      if (!$(target).is('.dropdowns') && !$(target).parents().is('.dropdowns')) {
        $('.dropdowns-menu').hide();
      }
    });
  });
  