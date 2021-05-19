
$(function(){
      /* slider- welcome */
      $('.slideshow').slick({
            dots: false,
            infinite: true,
            autoplay: true,
            autoplayspeed: 2000,
            fade:true,
            speed:1000,
            slidesToShow: 1,
            pauseOnHover: false
      });
      //slider-review
      $('.review-slider, .mockup-slider').slick({
            dots: true,
            infinite: true,
            autoplay: true,
            autoplayspeed: 2000,
      });
      // $('.mockup-slider').slick({
      //       dots: true,
      //       infinite: true,
      //       autoplay: true,
      //       autoplayspeed: 2000,
      // });
   
      //typeit-welcome
      $('#typing').typeIt({
            strings: ["Business strategy.", "Innovation Plan.", "Creative Idea."],
            speed:100,
            autostart:true,
            breakLines:false,
      });
      //wowscroll
      wow = new WOW({
            boxClass:'wow',
            offset: 150,
            mobile:true
      })
      wow.init()
});


$(function(){
      //header scroll
$(window).scroll(function(){
      if($(window).scrollTop() > 50){
$('header, .btn-top').addClass('active')
      }
      else{
            $('header, .btn-top').removeClass('active')
      }
})
      //faq accordion
      $('.faq-desc').eq(0).show()
    $('.faq-title').click(function(){
          $(this).next().stop().slideDown()
          $(this).parent().siblings('.faq-item').children('.faq-desc').stop().slideUp()
          $(this).parent().addClass('active')
          $(this).parent().siblings('.faq-item').removeClass('active')
    })
    //header trigger
    $('.trigger').click(function(){
          $(this).toggleClass('active')
          $('.gnb').toggleClass('active')
    })
    $('.gnb a, section').click(function(){
          $('.gnb, .trigger').removeClass('active')
    })
})