$(function(){
     $('.gnb >li >a').on('mouseenter focus', function(){
         var gnbindex = $('.gnb >li >a').index($(this));
         $('.gnb .inner').removeClass('on');
        $('.gnb .inner:eq('+ gnbindex +')').addClass('on');
     });
     $('header').on('mouseleave', function(){
         $('.gnb .inner').removeClass('on');
     });
     //trigger
  $('.trigger').click(function(){
    $(this).toggleClass('active')
    $('.gnb').toggleClass('active')
  })
  $('.gnb a').click(function(){
    $('.gnb, .trigger').removeClass('active')
  })
});
//fixheader
var scrollFix = 0;
scrollFix =$(document).scrollTop();
fixHeader();
//윈도우창 조절시 이벤트
$(window).on('scroll resize', function(){
    scrollFix =$(document).scrollTop();
fixHeader();
});
//고정헤더 함수 -> fixheader();
function fixHeader(){
    if(scrollFix > 50){
        $('header').addClass('on');
    } else{
        $('header').removeClass('on');
    }
}
//글자애니메이션 splitting
$(function(){
    $(window).resize(function(){
        if($(window).width() > 700)
        {
          Splitting();
        } 
    });
   if($(window).width() > 700)
   {
   Splitting();
   }
});

//top-visual 이미지슬라이드
$(function(){
    $('.visual .slide').slick({
        arrows:true,
        dots:true,
        autoplay:true,
        fade:true,
        autoplaySpeed:7000,
         pauseOnHover: false
        });
        $('.slick-prev').text("prev");
      //두번째슬라이드
      $('.slide2').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        Infinite:true,
        slidesToShow:2,
        slidesToScroll:1,
        autoplaySpeed:6000,
        pauseOnHover:false
        });  
        $(".slide2 #slick-slide-control10").text("제주전기차 충전인프라 공유플랫폼");
        $(".slide2 #slick-slide-control11").text("복지급여 중복수급 블록체인기반 관리플랫폼구축");
        $(".slide2 #slick-slide-control12").text("인공지능 학습용 데이터구축사업");
        $(".slide2 #slick-slide-control13").text("세종특별자치 공동구스마트 관리시스템구축");
});

//스크롤 애니메이션(scrolla)
$(function(){
    $('.animate').scrolla({
        mobile:false, //모바일버전시활성
        once:false//스크롤이 딱 한번만 하고 싶을땐 트루
    });
});
//스크롤다운
$(function(){
    $('.scroll').on('click',function(){
        var scrollBtn = $('#scroll').offset().top;//#scroll의 끝나는 지점으로 스크롤바 이동
        $('html,body').animate({scrollTop:(scrollBtn)},400); //그위치로 부드럽게스크롤
    })
})
//map
$(function(){
    new daum.roughmap.Lander({
        "timestamp" : "1620531395028",
        "key" : "25okb",
        "mapWidth" : "1708",
        "mapHeight" : "700"
    }).render();   
})
//sub-business
$(function () {
    $('.tabs li').click(function () {
        $('.tabs li').removeClass('selected')
        $(this).addClass('selected')

        var tab_id = $(this).attr('data-tab')
        $('.tab-content').removeClass('on')
        $("#" + tab_id).addClass('on')
    })
   
    $('.tablink').click(function(){ //스마트시티메뉴를 클릭했을때
        $(".tab").attr("class","tab") //디지털에셋에 셀렉티드를 제거
        $("#tab-1").attr("class","tab-content") //디지털에셋의 내용숨김
       $(".tab2").attr("class","tab2 selected") //스마트시티 메뉴 셀렉
       $("#tab-2").attr("class","tab-content en on") //스마트시티 메뉴 셀렉됬을때 컨텐츠 나옴 
    });
})







