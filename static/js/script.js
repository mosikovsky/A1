$(document).ready(function () {

  /*menu toogle*/
  $(function () {
    var btn = $(".navbar-toggler");
    var toggled = false;

    btn.click(function () {
      if (!toggled) {
        toggled = true;
        $(".navbar-toggler-text").text("Zavřít");
      } else {
        toggled = false;
        $(".navbar-toggler-text").text("Menu");
      }
    });
    $('.navbar-nav>li>a').on('click', function () {
      toggled = false;
      $(".menu-icon").toggleClass("menu-close");
      $(".navbar-toggler-text").text("Menu");
    });

  });


  $(".menu-icon").click(function () {
    $(this).toggleClass("menu-close");
  });

  $('.navbar-nav>li>a').on('click', function () {
    $('.navbar-collapse').collapse('hide');
  });

});