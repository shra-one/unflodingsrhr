$(function () {
  // testimonial slider

  $(".js-testimonials").slick({
    dots: true,
    infinite: true,
    speed: 300,
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: "0",
    prevArrow:'<div class="slick-prev"><span class="material-icons">keyboard_arrow_left</span></div>',
    nextArrow:'<div class="slick-next"><span class="material-icons">keyboard_arrow_right</span></div>',
    // adaptiveHeight: true,
    // adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "10",
        },
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          centerPadding: "10",
        },
      },
    ],
  });

  //countdown
  // Set the date we're counting down to
  var countDownDate = new Date("Jan 5, 2021 15:37:25").getTime();
  var x = setInterval(function () {
    // Get todays date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    if (days > 0) document.getElementById("days").innerHTML = days;
    else document.getElementById("days").innerHTML = 0;
    if (hours > 0) document.getElementById("hours").innerHTML = hours;
    else document.getElementById("hours").innerHTML = 0;
    if (minutes > 0) document.getElementById("minutes").innerHTML = minutes;
    else document.getElementById("minutes").innerHTML = 0;
    if (seconds > 0) document.getElementById("seconds").innerHTML = seconds;
    else document.getElementById("seconds").innerHTML = 0;

    // If the count down is finished, write some text
    if (distance < 0) {
      clearInterval(x);
    }
  }, 1000);

  var lastScroll = 0;
  var header = $('.navbar').outerHeight();
  console.log(header);
$(window).scroll(function(){
  if ($(window).scrollTop() >= header) {
      $('#header').addClass('sticky');
  }
  else {
    $('#header').removeClass('sticky');
  }
});
});


 // sticky header
// When the user scrolls the page, execute myFunction 


