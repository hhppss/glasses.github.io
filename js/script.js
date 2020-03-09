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
  $("#menu ,#menu1, #menu2, #menu3, #menu4, #menu5").on("click","a", function (event) {
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
  arrows: true,
  dots: true,
  prevArrow: '<img class="slick-prev" src="../img/prev.svg">',
  nextArrow: '<img class="slick-next" src="../img/next.svg">',
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
$('.recommendation-slider').slick({
  infinite: true,
  speed: 500,
  fade: true,
  cssEase: 'linear',
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  prevArrow: '<img class="slick-prev" src="../img/prev.svg">',
  nextArrow: '<img class="slick-next" src="../img/next.svg">'
});
ScrollReveal({ distance: '80px' });
ScrollReveal().reveal('.headline', { origin: 'bottom' });
ScrollReveal().reveal('.ani-input1', { delay: 300, origin: 'bottom' });
ScrollReveal().reveal('.ani-input2', { delay: 600, origin: 'bottom' });
ScrollReveal().reveal('.ani-input3', { delay: 900, origin: 'bottom' });
ScrollReveal().reveal('.ani-input4', { delay: 1200, origin: 'bottom' });
ScrollReveal().reveal('.ani-input5', { delay: 1500, origin: 'bottom' });
ScrollReveal().reveal('.headlinez', { delay: 600, origin: 'right'});
$(function(){
  $("#phone_mask").mask("8(999) 999-9999");
});
$('.brand-carousel').slick({
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots: true,
  arrows: true,
  dots: true,
  prevArrow: '<img class="slick-prev" src="../img/prev.svg">',
  nextArrow: '<img class="slick-next" src="../img/next.svg">',
  responsive: [
    {
      breakpoint: 1025,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 920,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 530,
      settings: {
        slidesToShow: 1
      }
    }
  ]
});