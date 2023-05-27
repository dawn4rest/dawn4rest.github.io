$(function(){
  setInterval(function(){
    if($('.mainbotBk').hasClass("swiper-slide-active") === true ) {
      $(".mainfull_navi").addClass("bk");
      $("header.head").css("border","none");
      $(".logo_header").css("color","#000");
      $("nav > ul > li > a").css("color","#000");
      $("header .menu-icon .navicon").addClass("bk");
    }else {
      $(".mainfull_navi").removeClass("bk");
      $("header.head").css("border-bottom","1px solid #fff");
      $(".logo_header").css("color","#fff");
      $("nav > ul > li > a").css("color","#fff");
      $("header .menu-icon .navicon").removeClass("bk");
    }
  },500);

  var ww = $(window).width();
  var mySwiper = undefined;

  function initSwiper() {
    if (ww >= 640 && mySwiper == undefined) {
      mySwiper = new Swiper(".swiper-container", {
        speed: 500,
        direction: 'vertical',
        mousewheel: true,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        watchOverflow : true,
        on: {
          slideChange: function() {
            setTimeout(function () {
              mySwiper.params.touchReleaseOnEdges = false;  
              mySwiper.params.mousewheel.releaseOnEdges = false;
            });
          },
          reachBeginning: function() {
            setTimeout(function () {
              mySwiper.params.touchReleaseOnEdges = true;
              mySwiper.params.mousewheel.releaseOnEdges = true;
            }, 500);
          }
        }
      });
    } 
  }

  initSwiper();

  $(window).on('resize', function () {
    setTimeout(function(){
      ww = $(window).width();
      initSwiper();
      },15);
  });

  $("header").addClass("head");
});