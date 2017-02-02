var $menu = $(".bar-header");
var icons = $("#header-default");

$(window).scroll(function() {
    if ($(this).scrollTop() > 390) {
      $menu.addClass("toppage");
      icons.addClass("toppage");
    } else {
      $menu.removeClass("toppage");
      icons.removeClass("toppage");
    }
 });​
