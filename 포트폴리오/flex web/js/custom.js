$(function () {
  //trigger
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  $('.gnb a').click(function(){
    $('.gnb, .trigger').removeClass('active')
  })

  //sliding jquery
  $('.gnb a, .gototop').click(function(e){
    $.scrollTo(this.hash || 0, 800)
    e.preventDefault();
  })

  //header-action
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('header,.gototop').addClass('active')
    }
    else{
      $('header,.gototop').removeClass('active')
    }
  })


  //slick.js
  $('.myslider').slick({
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 767,
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
  });
  //wowscroll
  wow = new WOW({
    boxClass:'wow',
    offset: 150,
    mobile:true
})
wow.init()

});
