$(document).ready(function() {
  $('.header-burger').click(function(event) {
    $('.header-burger, .header-menu').toggleClass('active');
    $('body').toggleClass('lock');
  })
  $('.header-link').click(function(event) {
    $('.header-burger, .header-menu').removeClass('active');
    $('body').removeClass('lock');
  })
  $('.shop-item__visible').click(function(event) {
    $('.closes').toggleClass('closeup');
  })
});
$(document).ready(function(){
  $("#menu ,#menu1, #menu2").on("click","a", function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 800);
  });
});
$('.advantaged-slider').slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 769,
      settings: {
        arrows: true,
        slidesToShow: 2
      }
    },
    {
      breakpoint: 589,
      settings: {
        arrows: true,
        slidesToShow: 1,
      }
    }
  ]
});