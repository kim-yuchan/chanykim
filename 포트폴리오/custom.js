$(function () {
  //trigger
  $('.trigger').click(function () {
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  $('section, .menu a').click(function () {
    $('.gnb').removeClass('active')
    $('.trigger').removeClass('active')
  })
  //logo trigger
  $('.logo').click(function () {
    $(this).toggleClass('active')
    $('.logo-box').toggleClass('active')
  })
  $('section').click(function () {
    $('.logo').removeClass('active')
    $('.logo-box').removeClass('active')
  })
  //profile follow btn
  $('#btnfollow').click(function () {
    $(this).toggleClass('active')
    $('.fa-smile-o').toggleClass('active')
    var $this = $(this)
    $this.toggleClass('btnfollow')
    if ($this.hasClass('btnfollow')) {
      $this.text('팔로우취소')
    } else {
      $this.text('팔로우')
    }
  })
  // smooth scrolling
  $('.menu a, .gototop').click(function (e) {
    $.scrollTo(this.hash || 0, 900)
  })
  //change css with scroll
  $(window).scroll(function () {
    if ($(window).scrollTop() > 50) {
      $('header, .gototop').addClass('active')
    } else {
      $('header, .gototop').removeClass('active')
    }
  })
  //slick.js :history
  $('.history-slider').slick({
    autoplay: true,
    autoplayspeed: 2000,
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 4,
    slidesToScroll: 4,
    pauseOnHover: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  })

  //slick.js : project photo
  $('.project-photo').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    autoplay: true,
    autoplayspeed: 1400,
    cssEase: 'linear',
    pauseOnHover: false
  })
  //typeit-welcome
  $('#typing').typeIt({
    strings: ["Specialists.", "Designer.", "Publisher."],
    speed: 100,
    autostart: true,
    breakLines: false,
    startDelay: 3000
  });
})
//button change text
// function displaybtn()
// {
//   document.getElementById("btnfollow").innerHTML = '팔로우취소'
// }
