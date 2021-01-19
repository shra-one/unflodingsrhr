
$(function(){
  AOS.init();
  $(".js-hero").slick({
    dots: false,
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
 
    prevArrow:'<div class="slick-prev"><span class="material-icons">keyboard_arrow_left</span></div>',
    nextArrow:'<div class="slick-next"><span class="material-icons">keyboard_arrow_right</span></div>',
    // adaptiveHeight: true,
    // adaptiveHeight: true,
  
  });

  AOS.refresh();
})